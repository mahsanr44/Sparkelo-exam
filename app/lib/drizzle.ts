import {
    pgTable,
    serial,
    varchar,
  } from "drizzle-orm/pg-core";
  import { drizzle } from "drizzle-orm/vercel-postgres";
  import { InferModel } from "drizzle-orm";
  import { sql } from "@vercel/postgres";
  
export const EmployeeTable=pgTable("employees",{
    id:serial('id').primaryKey(),
    firstname:varchar('firstname', {length:255}).notNull(),
    lastname:varchar('lastname', {length:255}).notNull(),
    email:varchar('email', {length:255}).notNull(),
    phone:varchar('phone', {length:255}).notNull(),
})

export type Employee=InferModel<typeof EmployeeTable>
export type newEmployee=InferModel<typeof EmployeeTable, 'insert'>

export const db=drizzle(sql)