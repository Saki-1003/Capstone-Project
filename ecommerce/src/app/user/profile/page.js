import { updateUser } from "@/backend/db_query/user"
import { getUser } from "@/backend/db_query/user"

export default async function ManageProfile() {
  const users = await getUsers()
  const user = users.map(item=><p>{item.first_name} {item.last_name}</p>)

  return(
    <main>
    <h1>Manage Profile</h1>
    <form action={updateUser}>

      <label htmlFor="first_name">First Name:</label><br />
      <input type="text" id="first_name" name="first_name" /><br />
      
      <label htmlFor="last_name">Last Name:</label><br />
      <input type="text" id="last_name" name="last_name" /><br />
      
      <label htmlFor="email">Email:</label><br />
      <input type="email" id="email" name="email" /><br />

      <label htmlFor="phone">Phone:</label><br />
      <input type="number" id="phone" name="phone" /><br />

      <label htmlFor="password">Password:</label><br />
      <input type="password" id="password" name="password" /><br />
     
      <label htmlFor="birthday">Birthday:</label><br />
      <input type="date" id="birthday" name="birthday" /><br />

      <label htmlFor="address_line1">Address_Line1:</label><br />
      <input type="text" id="address_line1" name="address_line1" /><br />
      
      <label htmlFor="address_line2">Address_Line2:</label><br />
      <input type="text" id="address_line2" name="address_line2" /><br />

      <label htmlFor="city">City:</label><br />
      <input type="text" id="city" name="city" /><br />
     
      <label htmlFor="postal_code">Postal Code:</label><br />
      <input type="number" id="postal_code" name="postal_code" /><br />
      
      <label htmlFor="region">Region:</label><br />
      <input type="text" id="region" name="region" /><br />
      
      <label htmlFor="country">Country:</label><br />
      <input type="text" id="country" name="country" /><br />
      
      <button type="submit">Update</button>
    </form>

    {user}

   
  </main>
  )
}