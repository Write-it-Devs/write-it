$(window).on("load", function() {

    var $primary = '#7367F0';
    var $danger = '#EA5455';
    var $warning = '#FF9F43';
    var $info = '#0DCCE1';
    var $primary_light = '#8F80F9';
    var $warning_light = '#FFC085';
    var $danger_light = '#f29292';
    var $info_light = '#1edec5';
    var $strok_color = '#b9c3cd';
    var $label_color = '#e7eef7';
    var $white = '#fff';


    // Subscribers Gained Chart starts //
    // ----------------------------------

    var gainedChartoptions = {
        chart: {
            height: 100,
            type: 'area',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            },
            grid: {
                show: false,
                padding: {
                    left: 0,
                    right: 0
                }
            },
        },
        colors: [$primary],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2.5
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0.9,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 80, 100]
            }
        },
        series: [{
            name: 'Active readers',
            data: [100, 200, 350, 430, 540, 680, 710, 820, 900, 1000]
        }],

        xaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            }
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            padding: { left: 0, right: 0 },
        }],
        tooltip: {
            x: { show: false }
        },
    }

    var gainedChart = new ApexCharts(
        document.querySelector("#subscribe-gain-chart"),
        gainedChartoptions
    );

    gainedChart.render();

    // Subscribers Gained Chart ends //



    // Orders Received Chart starts //
    // ----------------------------------

    var orderChartoptions = {
        chart: {
            height: 100,
            type: 'area',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            },
            grid: {
                show: false,
                padding: {
                    left: 0,
                    right: 0
                }
            },
        },
        colors: [$warning],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2.5
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0.9,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 80, 100]
            }
        },
        series: [{
            name: 'Blogposts',
            data: [0, 2, 4, 6, 8, 10]
        }],

        xaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            }
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            padding: { left: 0, right: 0 },
        }],
        tooltip: {
            x: { show: false }
        },
    }

    var orderChart = new ApexCharts(
        document.querySelector("#orders-received-chart"),
        orderChartoptions
    );

    orderChart.render();

    // Orders Received Chart ends //



    // Avg Session Chart Starts
    // ----------------------------------

    var sessionChartoptions = {
        chart: {
            type: 'bar',
            height: 200,
            sparkline: { enabled: true },
            toolbar: { show: false },
        },
        states: {
            hover: {
                filter: 'none'
            }
        },
        colors: [$label_color, $label_color, $primary, $label_color, $label_color, $label_color],
        series: [{
            name: 'Avg view',
            data: [2.1, 5.2, 7.8, 12, 7.8, 5.2, 2.1]
        }],
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },

        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
                endingShape: 'rounded'
            }
        },
        tooltip: {
            x: { show: false }
        },
        xaxis: {
            type: 'numeric',
        }
    }

    var sessionChart = new ApexCharts(
        document.querySelector("#avg-session-chart"),
        sessionChartoptions
    );

    sessionChart.render();

    // Avg Session Chart ends //


    // Support Tracker Chart starts
    // -----------------------------

    var supportChartoptions = {
        chart: {
            height: 270,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                size: 150,
                startAngle: -150,
                endAngle: 150,
                offsetY: 20,
                hollow: {
                    size: '65%',
                },
                track: {
                    background: $white,
                    strokeWidth: '100%',

                },
                dataLabels: {
                    value: {
                        offsetY: 30,
                        color: '#99a2ac',
                        fontSize: '2rem'
                    }
                }
            },
        },
        colors: [$danger],
        fill: {
            type: 'gradient',
            gradient: {
                // enabled: true,
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: [$primary],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            },
        },
        stroke: {
            dashArray: 8
        },
        series: [95],
        labels: ['Completed Tickets'],

    }

    var supportChart = new ApexCharts(
        document.querySelector("#support-tracker-chart"),
        supportChartoptions
    );

    supportChart.render();

    // Support Tracker Chart ends



    /***** TOUR ******/
    var tour = new Shepherd.Tour({
        classes: 'shadow-md bg-purple-dark',
        scrollTo: true
    })

    // tour steps
    tour.addStep('step-1', {
        text: 'Toggle Collapse Sidebar.',
        attachTo: '.modern-nav-toggle .collapse-toggle-icon bottom',
        buttons: [

            {
                text: "Skip",
                action: tour.complete
            },
            {
                text: 'Next',
                action: tour.next
            },
        ]
    });

    tour.addStep('step-2', {
        text: 'Create your own bookmarks. You can also re-arrange them using drag & drop.',
        attachTo: '.bookmark-icons .icon-mail bottom',
        buttons: [

            {
                text: "Skip",
                action: tour.complete
            },

            {
                text: "previous",
                action: tour.back
            },
            {
                text: 'Next',
                action: tour.next
            },
        ]
    });

    tour.addStep('step-3', {
        text: 'You can change language from here.',
        attachTo: '.dropdown-language .flag-icon bottom',
        buttons: [

            {
                text: "Skip",
                action: tour.complete
            },

            {
                text: "previous",
                action: tour.back
            },
            {
                text: 'Next',
                action: tour.next
            },
        ]
    });

    tour.addStep('step-4', {
        text: 'Try fuzzy search to visit pages in flash.',
        attachTo: '.nav-link-search .icon-search bottom',
        buttons: [

            {
                text: "Skip",
                action: tour.complete
            },

            {
                text: "previous",
                action: tour.back
            },
            {
                text: 'Next',
                action: tour.next
            },
        ]
    });

    tour.addStep('step-5', {
        text: 'Buy this awesomeness at affordable price!',
        attachTo: '.buy-now bottom',
        buttons: [

            {
                text: "previous",
                action: tour.back
            },

            {
                text: "Finish",
                action: tour.complete
            },
        ]
    });

    if ($(window).width() > 1200 && !$("body").hasClass("menu-collapsed")) {
        tour.start()
    } else {
        tour.cancel()
    }
    if ($("body").hasClass("horizontal-menu")) {
        tour.cancel()
    }
    $(window).on("resize", function() {
        tour.cancel()
    })

});
