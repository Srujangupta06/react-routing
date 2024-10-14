import { useRouteError } from "react-router-dom"
const Error = () => {
    const error = useRouteError();
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <img src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1728885010/Search_zgu8sh.png" alt="error image" 
      className="h-96 w-96"/>
      <h1 className="text-2xl font-semibold">Page {error.statusText}</h1>
      <p className="my-4">Check URL and Try Again</p>
    </div>
  )
}

export default Error
