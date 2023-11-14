import { EmployeeTable, db } from "@/app/lib/drizzle";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export const DELETE = async (request:NextRequest,   { params }: { params: { id: number }} ) => {
    try {
            const res = await db
             .delete(EmployeeTable).where(eq(EmployeeTable.id, params.id));
             if(res.rowCount>0) {
            return Response.json({
              success: "Record Deleted Successfully",
              data: res.rowCount
            });
          }
          else{
            // record not found
            return Response.json({
              error: "Record Not Found"
            });
          }
        } 
     catch (error) {
      console.log("error....................................",error); 
      return Response.json({
        error: error
      });
    }
  };