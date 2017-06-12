        $(document).ready(function() {

          $('#form').validator().on('submit', function(e) {
            if (e.isDefaultPrevented()) {
              // handle the invalid form...
              $('#myModa6').modal('hide');
            } else {
              // everything looks good!
              $('#myModa6').modal('show');
            }
          })

        });
