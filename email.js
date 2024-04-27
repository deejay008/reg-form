
<script>
 function checkEmail(emailid,fourtherror) {
            var email1 = document.getElementById('emailid');
            var filter = /^([A-Za-z0-90_])+\@([a-z]{5})+\.([a-z]){3}$/
            if (!filter.test(email1.value)) {
              email1.focus;
                return false;
            }
        }

</script>