export const ContactList = function ( {contacts, onClick } ) {
  return (
      <>
      <ul>
        { contacts.map(({id, ...contacts }) => (
          <li key={id}>
            <p>{contacts.name}:{contacts.number}</p>
            <button type="button"  onClick = {() => onClick(id)}>Delete</button>
          </li> 
        ))}
      </ul>
      </>
  );
}