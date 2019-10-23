(function ($, Drupal) {

  var initialized;

  function init(userFlaggedProperties) {
    if (!initialized) {
      initialized = true;
      $( document ).ready(function() {
        // Add your one-time only code here
        if (userFlaggedProperties > 0) {
          $('.user-saved-properties').addClass('filled');
        }
        $('.user-saved-properties .items').html(userFlaggedProperties);
      });
    }
  }

  Drupal.behaviors.someKey = {
    attach: function(context, settings) {
      init(parseInt(drupalSettings.userFlaggedProperties));
      $( document ).ready(function() {
        var flaggedItems = parseInt($(".user-saved-properties .items").text());
        $( ".property .flag-property.action-flag a" ).once().bind( "click", function() {
          var newFlaggetItems = flaggedItems + 1;
          $('.user-saved-properties').addClass('filled');
          $('.user-saved-properties .items').text(newFlaggetItems);
        });
        $( ".property .flag-property.action-unflag a" ).once().bind( "click", function() {
          var newFlaggetItems = flaggedItems - 1;
          if (flaggedItems == 1) {
            $('.user-saved-properties').removeClass('filled');
          }
          $('.user-saved-properties .items').text(newFlaggetItems);
        });
      });
    }
  };



  Drupal.behaviors.isula = {
    attach: function (context, settings) {
      $('.field--name-field-prezzo,.views-field-field-prezzo').once().each(function() {
        price = $(this).text();
        if (price == '0€') {
          $(this).html(Drupal.t('Trattativa Privata'));
          return;
        }
      });

      // Highlight marker on maps
      /*$('.property .property-row').mouseenter(function() {
        var villaName = $( this ).find('.node-title').text();
        $('.leaflet-marker-icon[title="' + villaName + '"]').attr("src", "/themes/custom/isula/images/red-marker.png");
        $('.leaflet-marker-icon[title="' + villaName + '"]').css('z-index', '10000');
      });

      $('.property .property-row').mouseleave(function() {
        var villaName = $( this ).find('.node-title').text();
        $('.leaflet-marker-icon[title="' + villaName + '"]').attr("src", "/modules/contrib/leaflet/js/leaflet/dist/images/marker-icon.png");
        $('.leaflet-marker-icon[title="' + villaName + '"]').css('z-index', '1');
      });

      // Set overall ratings
      $('.isulaOverallReviews').text(drupalSettings.number_of_reviews);
      $('.isulaTotalScore').text(drupalSettings.overall_rating + '/10');*/

      if ($(window).width() > 768) {
        $('.isula-availability-search .right-col').stick_in_parent().on('sticky_kit:bottom', function(e) {
          $(this).parent().css('position', 'static');
          $(this).css('bottom', '35px');
        });
        $('.path-taxonomy .middle_right').stick_in_parent().on('sticky_kit:bottom', function(e) {
          $(this).parent().css('position', 'static');
          $(this).css('bottom', '35px');
        });

        $('.page-node-type-property .content-sidebar').stick_in_parent().on('sticky_kit:bottom', function(e) {
          $(this).parent().css('position', 'static');
          $(this).css('bottom', '35px');
        });
        $('.page-node-type-blog .sidebar, .path-discover-sicily .sidebar').stick_in_parent().on('sticky_kit:bottom', function(e) {
          $(this).parent().css('position', 'static');
          $(this).css('bottom', '35px');
          $(this).css('top', '15px');
        });
      }

      // Facets.
      /*if ($(window).width() <= 768) {
        // Close facet on tablet and mobile.
        $('.block-facet--checkbox .block-title').addClass('closed');
        $('.block-facet--checkbox .facets-widget-checkbox').toggle();
        $('.block-facet--checkbox .facets-widget-range_slider').toggle();
      }
      $('.block-facet--checkbox .block-title').click(function() {
        $(this).parent().find('.facets-widget-checkbox').toggle();
        $(this).parent().find('.facets-widget-range_slider').toggle();
        $(this).toggleClass('closed');
      });*/


    }
  };

  // Manage isula's animations.
  Drupal.behaviors.animationsScripts = {
    attach: function (context, settings) {
      AOS.init({
        duration: 400,
      });
    }
  };

})(jQuery, Drupal)
