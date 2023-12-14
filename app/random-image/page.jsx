import ImageBar from "./ImageBar";
import PexelImage from "./PexelImage";

async function getImages({ page }) {
  const res = await fetch(
    `https://api.pexels.com/v1/curated?per_page=1&page=${page}`,
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
      },
    }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function RandomImage() {
  const data = await getImages("1");

  return (
    <div className="flex flex-col h-full">
      <h1>Random Image</h1>

      <div className="h-[90%]">
        {data.photos &&
          data.photos.map((image) => (
            <PexelImage key={image.id} image={image} alt="Image" />
          ))}
        <ImageBar data={data} />
      </div>
    </div>
  );
}
