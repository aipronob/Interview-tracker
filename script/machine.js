

// machine id -> click

function getValueFromClick(id) {
  const click = document.getElementById(id);
  const value = click.value;
  console.log (id, value );
  return value;
}