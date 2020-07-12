$(sub).click(function(ev){
  ev.preventDefault(); // Stop the form from redirecting the page.
  $.ajax({
          type:'GET',
          url:'search.py', // Or /cgi-bin/run.py. I'm not sure where your python script is.
          cache:false,
          dataType: 'html',
          data: $('#divetext').serialize(), // Send the form data in the request.
          success:function (z) {
               $('#divca').html(z);
          }
  });

});