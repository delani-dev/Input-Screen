var txtCounter = 2;
$(function() {
    var counter = 0;
    $('.txt-input').unbind('keyup change input paste').bind('keyup change input paste',function(e){
        var $this = $(this);
        var val = $this.val();
        var valLength = val.length;
        var maxCount = $this.attr('maxlength');
        if(valLength>maxCount){
            $this.val($this.val().substring(0,maxCount));
        } else if (valLength == maxCount && valLength ) {
            newTextBox();
        }
        console.log(valLength);

        $('.txt-input').on('input', function() {
            $('.txt-area').text($this.val());
        });
    }); 
    
 
    $("#addButton").click(function() {
        var tasks = new Array();

        newTextBox();

        $('.txt-input').on('input', function() {
            $('.txt-input').each(function() {
                //console.log(tasks.push($(this).val()));
                $(tasks).val($("#txt-input2").val());
            });
        });

        counter++;
    });

     // Checks if the text box has he value before removing it!
    $("body").on("click", ".btn-remove", function() {
        // if($(this).val.length > 0) {
        //     console.log('confirm to delete');
        // } else {
        //     console.log('You can just delete');
        // }
        $(this).closest('.form-group').remove();
        counter--;
      });

});


function newTextBox() {
    var newFormField = $(document.createElement('div')).attr("class", 'form-group');
    
    newFormField.after().html(' <label for="fname">Line '+ txtCounter+': </label> ' +
      ' <input type="text" id="txt-input' + txtCounter +'" class="txt-input col-6" maxlength="40">' +
      ' <input type="button" name="button" class="btn-remove" value="X">');
    newFormField.appendTo(".field-holder");
    txtCounter++;
}