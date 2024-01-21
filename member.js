function skillsMember()
{
    var member = document.getElementById("member").value;
    var memberError = document.getElementById("memberError");
    var memberRegex = /^[a-zA-Z ]{2,30}$/;
    if (memberRegex.test(member) === false)
    {
        memberError.innerHTML = "Please enter a valid name";
        memberError.style.color = "red";
        return false;
    }
    else
    {
        memberError.innerHTML = "Valid name";
        memberError.style.color = "green";
        return true;
    }
}
