/**
 * Set up Pulsar's UI environment
 */

define(['jquery'], function() {

    $(document).ready(function() {  

        require(['jquery-ui', 'jquery-ui-touch'], function() {

            var widget_content = '';

            $( ".dashboard" ).sortable({
                forcePlaceholderSize: true,
                opacity: 0.5,
                revert: 100,
                receive: function(event, ui) {
                    $(this).data().uiSortable.currentItem.html(widget_content);
                }
            }).disableSelection();

            $('.tray__widgets .widget').draggable({
              connectToSortable: '.dashboard',
              helper: 'clone',
              revert: 'invalid',
              start: function(event, ui) {
                var widget = $(ui.helper.context).data('widget');
                var self = $(this);
                $.ajax({
                  url: '/views/dashboard/widgets/' + widget
                }).done(function(data) {
                  widget_content = data;
                });
              }
            });

        });
     
        // Stick the Jadu toolbar to the top of the window
        require(['sticky'], function() {
            $('.toolbar').sticky({topSpacing: 0});
            // $('.tray').sticky({topSpacing: 44}).sticky('update');
        });

        // Init tooltips
        require(['tooltip'], function() {
            $('[data-toggle="tooltip"]').tooltip();
        });

        // Trigger syntax highlighting
        if (!$('html.ie7').size()) { // IE8 and up only
            require(['highlightjs'], function() {
                var aCodes = document.getElementsByTagName('pre');
                for (var i=0; i < aCodes.length; i++) {
                    hljs.highlightBlock(aCodes[i]);
                }
            });
        }

        // Show summary panels based on their data-tab value
        require(['tab'], function() {
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                e.target // activated tab
                e.relatedTarget // previous tab

                $('.summary.open').removeClass('open').hide();
                
                var $summary = '';

                if ($(e.target).parent().has('.is-active').length != 0) {
                    var $pane = $($('.is-active > a', $(e.target).parent()).attr('href'));
                    if ($pane.attr('data-summary') != 'undefined') {
                        $summary = $('[data-tab="' + $pane.attr('data-summary') + '"]');
                    }
                } else {
                    $summary = $($(e.target).attr('data-summary'));
                }

                if ($summary.length) {
                    $summary.show().addClass('open');
                } else {
                    $summary.hide();
                }
            });
        });
    

        if ($('[data-summary]').hasClass('is-active')) {
            $('[data-tab="' + $('[data-summary]').attr('href') + '"]').show();
        }

        // $('[data-popover-content]').popover({ 
        //     html : true, 
        //     placement: 'bottom',
        //     content: function() {
        //       return $($(this).data('popoverContent'));
        //     }
        // });

        require(['daterange'], function() {
            $('[data-daterange]').daterangepicker(
                {
                  ranges: {
                     'Today': [moment(), moment()],
                     'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                     'Last 7 Days': [moment().subtract('days', 6), moment()],
                     'Last 30 Days': [moment().subtract('days', 29), moment()],
                     'This Month': [moment().startOf('month'), moment().endOf('month')],
                     'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                  },
                  startDate: moment().subtract('days', 29),
                  endDate: moment()
                },
                function(start, end) {
                    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                }
            );
        });

        // toggle a given element
        $('[data-toggle]').on('click', function(e) {
            $target = $('.' + $(this).data('toggle'));
            $target.slideToggle(100);
        });

    });
});

