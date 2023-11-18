

export default function Login() {
  return (
    <div>
      <form action="" method="post">
        <h1>log in</h1>
        <label htmlFor="username" aria-required>Username: </label>
        <input type="text" name="username" id="username"></input><br /><br />
        <label htmlFor="password" aria-required>Password: </label>
        <input type="password" name="password" id="password"></input><br /><br />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}
