
export default function Signup() {
  return (
    <div>
      <form action="" method="post">
        <h1>Signup Now</h1>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name"></input><br /><br />
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email"></input><br /><br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password"></input><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
