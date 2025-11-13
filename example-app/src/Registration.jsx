export default function Registration() {
  return (

    
    <form onSubmit={handleSubmit}>  
    {/* Form fields */}
    <input name="email" type="email" />
    <input name="name" type="text" />
    <button type="submit">Submit</button>

    </form>
    
  );

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;

    onSubmit(email, name);
}
function onSubmit(email, name){
    
    alert(`submitted :${name}- ${email}`);
}
}