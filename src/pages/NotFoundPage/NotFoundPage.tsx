import { NavLink } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="max-w-[50rem] flex flex-col mx-auto size-full">
        <div className="text-center py-32 px-4 sm:px-6 lg:px-8">
            <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">404</h1>
            <h1 className="block text-2xl font-bold text-white" />
            <p className="mt-3 text-gray-600 dark:text-gray-400">Ops, qualcosa è andato storto.</p>
            <p className="text-gray-600 dark:text-gray-400">Ci dispiace, non è stato possibile trovare la pagina.</p>
            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <NavLink className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" to="/">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                Torna alla homepage
            </NavLink>
            </div>
        </div>
        <footer className="mt-auto text-center py-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500">© All Rights Reserved. 2024.</p>
            </div>
        </footer>
    </div>
  )
}

export default NotFoundPage