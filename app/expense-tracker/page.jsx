"use client";

import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useEffect, useLayoutEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../components/firebase";
import { AiFillPlusCircle } from "react-icons/ai";
import LoadingExpense from "./LoadingExpense";
import { useRouter } from "next/navigation";

export default function ExpenseTracker() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", price: "" });

  const router = useRouter();

  const [user, userLoading] = useAuthState(auth);
  const [expenses, expensesLoading, firestoreError] = useCollection(
    collection(
      db,
      `users/${userLoading ? "loading" : user.uid}/expense-tracker`
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    if (expensesLoading) return;
    let itemsArray = [];

    expenses.forEach((expense) => {
      itemsArray.push({ ...expense.data(), id: expense.id });
    });
    setItems(itemsArray);

    // Calculate total
    const calculateTotal = () => {
      const totalPrice = itemsArray.reduce(
        (sum, item) => sum + parseFloat(item.price),
        0
      );
      setTotal(totalPrice);
    };

    calculateTotal();
  }, [expenses, expensesLoading]);

  const [total, setTotal] = useState(0);

  // Add Item
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.name !== "" && newItem.price !== "") {
      const userRef = collection(db, `users/${user.uid}/expense-tracker`);

      await addDoc(userRef, {
        name: newItem.name.trim(),
        price: newItem.price,
        // details: todoDetails,
      });

      setNewItem({ name: "", price: "" });
    }
  };

  // Delete Item
  const deleteItem = async (id) => {
    const userRef = collection(db, `users/${user.uid}/expense-tracker`);

    await deleteDoc(doc(userRef, id));
  };

  useLayoutEffect(() => {
    if (!userLoading && !user) {
      router.push("/sign-up");
    }
  }, [router, user, userLoading]);

  if (firestoreError) {
    throw new Error(firestoreError.message);
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div className="p-4">
        <form className=" grid grid-cols-6 items-center">
          <input
            className=" col-span-3 p-3 rounded-s-xl  outline-none ring-0"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            type="text"
            placeholder="Item"
          />
          <input
            className="col-span-2 p-3 "
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            type="number"
            placeholder="$"
          />
          <button
            className=" bg-white h-full rounded-e-xl "
            type="submit"
            onClick={addItem}
          >
            Add
          </button>
        </form>

        {expensesLoading ? (
          <div className="animate-pulse my-4 w-full h-14 rounded-xl bg-slate-200" />
        ) : (
          <>
            <ul>
              {items.map((item, id) => (
                <li key={id} className=" my-4 w-full flex justify-between">
                  <div className="p-4 w-full flex justify-between">
                    <span className="capitalize">{item.name}</span>
                    <span>${item.price}</span>
                  </div>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="ml-8 p-4"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            {items.length === 0 && (
              <div className="flex flex-col justify-center items-center gap-5 m-6 mt-[20%]">
                <AiFillPlusCircle className="text-6xl text-cyan-700" />
                <h3>Add an item to begin</h3>
              </div>
            )}
          </>
        )}

        {items.length > 0 && (
          <div className="flex justify-between p-3">
            <span>Total</span>
            <span>${total}</span>
          </div>
        )}
      </div>
    </div>
  );
}
