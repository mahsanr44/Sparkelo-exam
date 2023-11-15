"use client";
import { newEmployee } from "@/lib/drizzle";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddTodo = () => {
  const [data, setData] = useState<newEmployee>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const { refresh } = useRouter();

  const handleDeleteAll = async () => {
    const res = await fetch("/api/employees", {
      method: "DELETE",
    });

    refresh();
  };

  const handleSubmit = async () => {
    try {
      if (data.firstname || data.lastname || data.email || data.phone) {
        const res = await fetch("/api/employees", {
          method: "POST",
          body: JSON.stringify({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
          }),
        });
        refresh();
        setData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-16 max-w-lg mx-12 md:mx-32 lg:mx-[420px]">
      <div className="border-2 border-primary rounded-md">
        <div className="bg-primary py-3">
          <h2 className="text-white px-4">New Employee</h2>
        </div>
        <div className="m-6">
          <form action="" className="space-y-1">
            <label className="mr-8">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => setData({ ...data, firstname: e.target.value })}
              value={data.firstname}
              maxLength={5}
              type="text"
              className="border border-primary rounded px-1.5"
              required
            />
            <br />
            <label className="mr-8">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => setData({ ...data, lastname: e.target.value })}
              value={data.lastname}
              maxLength={4}
              type="text"
              className="border border-primary rounded px-1.5"
              required
            />
            <br />
            <label className="mr-[73px]">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}
              type="email"
              className="border border-primary rounded px-1.5"
              required
            />
            <br />
            <label className="mr-[66px]">
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              value={data.phone}
              type="tel"
              className="border border-primary rounded px-1.5"
              required
            />
            <br />
            <div className="flex justify-end space-x-2 mx-4 pt-3">
              <button
                className="bg-primary text-white px-5  font-semibold rounded-2xl"
                type="button"
                onClick={handleSubmit}
              >
                ADD
              </button>
              <button
                onClick={handleDeleteAll}
                type="button"
                className="text-gray-600 font-semibold uppercase"
              >
                Delete All
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
