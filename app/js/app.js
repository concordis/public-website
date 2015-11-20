// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation({
  topbar: {
    sticky_on: "all",
  },
});

$(function() {

  $('.link-to').on('click', function(e) {
    e.preventDefault();
    var navHeightOffset = $('nav').height();
    var whichSection = $(this).attr('href');
    var scrollTarget = $('section' + whichSection).offset().top - navHeightOffset;

    $('html, body').stop().animate({ scrollTop: scrollTarget }, 500, function() {
      $('html, body').stop().animate({ scrollTop: scrollTarget - 50 }, 100, function() {
        $('html, body').stop().animate({ scrollTop: scrollTarget }, 500);
      });
    });
  });



  //
  // Check for video element and set it up
  //
  var vids,
    HeroVideo = {

    settings: {
      isVideo: Modernizr.video.h264,
      $detailVideoContainer: $("#detail-video"),
      $heroVideoContainer: $("#hero-video-container"),
      $playVideoCTAContainer: $("#play-video-cta"),
      $playVideoCTAButtonContainer: $("#play-me"),
      $heroVideo: $("#hero-video"),
    },

    init: function() {
      vids = this.settings;
      if(vids.isVideo) {
        this.buildPlayCTA();
        this.doEndVideo();
      }
    },

    bindPlayCTAActions: function() {
      vids.$playVideoCTAButtonContainer.find("a").on("click", function(e) {
        e.preventDefault();
        vids.$heroVideo[0].load();
        vids.$playVideoCTAContainer.fadeOut("slow", function() {
          vids.$heroVideo.fadeIn("slow", function() {
            vids.$heroVideo[0].play();
          });
        });
      });
    },

    buildPlayCTA: function() {
      $("<a></a>", {
          "class": "button round",
          html: "Play Video"
        }).appendTo(vids.$playVideoCTAButtonContainer);
      vids.$playVideoCTAButtonContainer.fadeIn();
      this.bindPlayCTAActions();
    },

    doEndVideo: function() {
      vids.$heroVideo.bind("timeupdate", function() {
        if(vids.$heroVideo[0].currentTime >= 106) {
          vids.$heroVideo.fadeOut("slow", function() {
            vids.$playVideoCTAContainer.fadeIn("slow");
          });
        }
      })
    },

  }



  //
  // Set up the rate calculator
  //
  var s,
    RateCalc = {

    settings: {
      cSource: true,
      cSourceConcordis: 0.25,
      cSourceConsultant: 0.2,
      $cSourceButtons: $("#contract-source-switch a"),
      $c1BreakdownContainer: $("#breakdown-container"),
      $c1BillRate: $("#c1-bill-rate input"),
      $c1ConcordisRate: $("#c1-concordis-rate span"),
      $c1ConsultantCost: $("#c1-consultant-cost span"),
      $c1FICA: $("#c1-fica span"),
      $c1MEDI: $("#c1-medi span"),
      $c1WARateER: $("#c1-wa-rate-er span"),
      $c1SDIWAER: $("#c1-sdi-wa-er span"),
      $c1SUTAWAER: $("#c1-suta-wa-er span"),
      $c1TotalET: $("#c1-total-employment-taxes span"),
      $c1InsuranceBenefits: $("#c1-insurance-benefits span"),
      $c1PayRate: $("#c1-pay-rate span"),
      $c1PayRate2: $("#c1-pay-rate-2 span"),
    },

    init: function() {
      s = this.settings;
      this.bindUIActions();
    },

    bindUIActions: function() {
      s.$cSourceButtons.on("click", function(e) {
        e.preventDefault();
        $this = $(this);
        RateCalc.setSource($this);
        RateCalc.checkFade();
        RateCalc.c1MegaCalc();
      });
      s.$c1BillRate.on("change keyup", function() {
        RateCalc.checkFade();
        RateCalc.c1MegaCalc();
      });
    },

    realRound: function(v) {
      return Number(Math.round(v+'e'+2)+'e-'+2);
    },

    checkFade: function() {
      if ( s.$c1BreakdownContainer.hasClass("faded") ) {
        s.$c1BreakdownContainer.removeClass();
      }
    },

    setSource: function() {
      // This is the sloppiest thing evar.
      var which =  $this.is("#c-found") ? "c-found" : "i-found";
      if ( $this.hasClass("secondary") ) {
        if (which == "c-found") {
          s.cSource = true;
          $this.removeClass("secondary");
          $("#i-found").addClass("secondary");
          $(".c-source").show();
        } else {
          s.cSource = false;
          $this.removeClass("secondary");
          $("#c-found").addClass("secondary");
          $(".c-source").hide();
        }
      }
    },

    c1MegaCalc: function() {
      var c1InsuranceBenefitsCalc = 545/(2080/12); // Cost per month / (work hours per year / months)
      var c1ConcordisRate = s.cSource ? s.cSourceConcordis : s.cSourceConsultant;
      var c1ConcordisRateCalc = (s.$c1BillRate.val() * c1ConcordisRate).toFixed(2);
      var c1ConcordisRateCalc2 = (s.$c1BillRate.val() * s.cSourceConsultant).toFixed(2);
      var c1ConsultantCostCalc = (s.$c1BillRate.val() - c1ConcordisRateCalc).toFixed(2);
      var c1ConsultantCostCalc2 = (s.$c1BillRate.val() - c1ConcordisRateCalc2).toFixed(2);
      if (s.cSource) {
        var totalEmploymentTaxesCalc =
            (c1ConsultantCostCalc * .062) +
            (c1ConsultantCostCalc * .0145) +
            (c1ConsultantCostCalc * .0002) +
            (c1ConsultantCostCalc * .0024) +
            (c1ConsultantCostCalc * .0336)
        } else {
          var totalEmploymentTaxesCalc = 0;
        }
      ;
      s.$c1ConcordisRate.html(c1ConcordisRateCalc);
      s.$c1ConsultantCost.html(c1ConsultantCostCalc);
      s.$c1FICA.html( this.realRound( (c1ConsultantCostCalc * .062) ).toFixed(2) );
      s.$c1MEDI.html( this.realRound( (c1ConsultantCostCalc * .0145) ).toFixed(2) );
      s.$c1WARateER.html( this.realRound( (c1ConsultantCostCalc * .0002) ).toFixed(2) );
      s.$c1SDIWAER.html( this.realRound( (c1ConsultantCostCalc * .0024) ).toFixed(2) );
      s.$c1SUTAWAER.html( this.realRound( (c1ConsultantCostCalc * .0336) ).toFixed(2) );
      s.$c1TotalET.html( this.realRound( totalEmploymentTaxesCalc ).toFixed(2) );
      s.$c1InsuranceBenefits.html( c1InsuranceBenefitsCalc.toFixed(2) );
      s.$c1PayRate.html( this.realRound( c1ConsultantCostCalc - (totalEmploymentTaxesCalc + c1InsuranceBenefitsCalc)).toFixed(2) );
      s.$c1PayRate2.html( this.realRound( c1ConsultantCostCalc2 - (0 + c1InsuranceBenefitsCalc)).toFixed(2) );
    },

  }


  //
  // Do the stuff
  //
  if($("#rate-calc")) {
    RateCalc.init();
  }
  if($("#detail-video")) {
    HeroVideo.init();
  }

});

