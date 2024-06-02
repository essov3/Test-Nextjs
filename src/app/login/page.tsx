export default function LoginPage() {
    return <>
        <div className="flex flex-col items-center justify-center h-screen ">
            <h1>Login</h1>

            <form method="post" action="/api/login" className="flex flex-col items-center justify-center bg-gray-800 m-6 p-4 rounded ">
                <input type="email" name="email" placeholder="Email" required className="m-2" />
                <input type="password" name="password" placeholder="Password" required className="m-2 bg-yellow-500" />
                <button type="submit">Login</button>
            </form>


        </div>
    </>
}