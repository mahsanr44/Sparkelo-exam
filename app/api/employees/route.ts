import { EmployeeTable, db } from "@/app/lib/drizzle";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export const GET=async(request:NextRequest)=>{
    try {
        await sql`CREATE TABLE IF NOT EXISTS Employees(id serial, firstname varchar(255), lastname varchar(255), email varchar(255), phone varchar(255))`
        const res =await db.select().from(EmployeeTable);
        return NextResponse.json({data:res})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: error});
    }
}

export const POST =async (request:NextRequest)=>{
    const req=await request.json();
    try {
        if(req.firstname ||req.lastname ||req.email || req.phone ){
            const res=await db.insert(EmployeeTable).values({
                firstname:req.firstname,
                lastname:req.lastname,
                email:req.email,
                phone:req.phone
            }).returning();
            return NextResponse.json({
                success: "Employee Added Successfully",
                data: res
              });
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: error});
    }
}


export const PUT = async (request: NextRequest) => {

    const req = await request.json();
  
    try {
      if (req.id) {
        const res = await db.update(EmployeeTable).set({
            firstname:req?.firstname,
            lastname:req?.lastname,
            email:req?.email,
            phone:req?.phone

        }).where(eq(EmployeeTable.id, req.id));
        return NextResponse.json({
          success: "Record Updated Successfully",
          data: res
        });
      } 
      else {
        return NextResponse.json({ error: `Missing Field Required` });
      }
    } 
    catch (error) {
      return NextResponse.json({ error: "Something Went Wrong" });
    }
  };
  

  export const DELETE= async (req: NextRequest)=>{
    try {
      const res= await db.delete(EmployeeTable).execute();
      return NextResponse.json({
        success: "All records deleted successfully",
    data:res
      })
    } catch (error) {
      console.log(error)
    }
  }