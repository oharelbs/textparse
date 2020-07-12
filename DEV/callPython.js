//call python
    function goPython(){
            $.ajax({
              url: "search.py",
             context: document.body
            }).done(function() {
             alert('finished python script');;
            });
        }