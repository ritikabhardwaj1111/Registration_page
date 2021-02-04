<script>
function validateForm()
 {
  var x = getElementsByName('name');
  var y = getElementsByName('mail');
  var z = getElementsByName('password')
  if (x == "" ) {
    alert("Name must be filled out");
    return false;
  }
  if (y == "" ) {
    alert("Email is invalid ");
    return false;
  }
  if (z == "" ) {
    alert("Password invalid");
    return false;
  }
  }

</script>
