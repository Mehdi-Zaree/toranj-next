"use server"
import {getAllCategories} from "./lib/actions/category.action";

async function projectData(){
   return await getAllCategories();
}

export default projectData()