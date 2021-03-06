import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image";

export default function AddnewdataPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
			<h2 className="font-bold text-2xl  text-center text-slate-900 my-10">Enter Agenda</h2>
            <div className="mb-3 pt-0">
               <input type="text" placeholder="input text" className="px-3 py-3 placeholder-slate-500 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
            </div>
            <h2 className="font-bold text-2xl  text-center text-slate-900 my-10">Enter Data</h2>
            <div className="mb-3 pt-0">
               <input type="text" placeholder="input text" className="px-3 py-3 placeholder-slate-500 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
            </div>
            <Link href="/Round1">
            <button className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-10 border-b-4 border-slate-700 hover:border-slate-500 rounded mx-40 my-5">
             SUBMIT</button></Link>
          </div>
       
    )
}
