export default function LoginPage() {
    return <>
        <div className="flex flex-col items-center justify-center h-screen ">
            <h1>Login</h1>

            <form method="post" action="/api/login">
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>


        </div>
    </>
}