;(function(exports) {
    var MS_IN_MINUTES = 60 * 1000;
  
    var formatTime = function(date) {
      return date.toISOString().replace(/-|:|\.\d+/g, '');
    };
  
    var calculateEndTime = function(event) {
      return event.end ?
        formatTime(event.end) :
        formatTime(new Date(event.start.getTime() + (event.duration * MS_IN_MINUTES)));
    };
  
    var calendarGenerators = {
      google: function(event) {
        var startTime = formatTime(event.start);
        var endTime = calculateEndTime(event);
  
        var href = encodeURI([
          'https://www.google.com/calendar/render',
          '?action=TEMPLATE',
          '&text=' + (event.title || ''),
          '&dates=' + (startTime || ''),
          '/' + (endTime || ''),
          '&details=' + (event.description || ''),
          '&location=' + (event.address || ''),
          '&sprop=&sprop=name:'
        ].join(''));
        return href;
      },
  
      yahoo: function(event) {
        var eventDuration = event.end ?
          ((event.end.getTime() - event.start.getTime())/ MS_IN_MINUTES) :
          event.duration;
  
        // Yahoo dates are crazy, we need to convert the duration from minutes to hh:mm
        var yahooHourDuration = eventDuration < 600 ?
          '0' + Math.floor((eventDuration / 60)) :
          Math.floor((eventDuration / 60)) + '';
  
        var yahooMinuteDuration = eventDuration % 60 < 10 ?
          '0' + eventDuration % 60 :
          eventDuration % 60 + '';
  
        var yahooEventDuration = yahooHourDuration + yahooMinuteDuration;
  
        // Remove timezone from event time
        var st = formatTime(new Date(event.start)) || '';
  
        var href = encodeURI([
          'http://calendar.yahoo.com/?v=60&view=d&type=20',
          '&title=' + (event.title || ''),
          '&st=' + st,
          '&dur=' + (yahooEventDuration || ''),
          '&desc=' + (event.description || ''),
          '&in_loc=' + (event.address || '')
        ].join(''));
  
        return href;
      },
  
      ics: function(event) {
        var startTime = formatTime(event.start);
        var endTime = calculateEndTime(event);
  
        var href = encodeURI(
          'data:text/calendar;charset=utf8,' + [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            'URL:' + document.URL,
            'DTSTART:' + (startTime || ''),
            'DTEND:' + (endTime || ''),
            'SUMMARY:' + (event.title || ''),
            'DESCRIPTION:' + (event.description || ''),
            'LOCATION:' + (event.address || ''),
            'END:VEVENT',
            'END:VCALENDAR'].join('\n'));
  
        return href;
      },
    };
  
    var generateCalendars = function(event) {
      return {
        google: calendarGenerators.google(event),
        yahoo: calendarGenerators.yahoo(event),
        ical: calendarGenerators.ics(event),
        outlook: calendarGenerators.ics(event)
      };
    };

  
    // Make sure we have the necessary event data, such as start time and event duration
    var validParams = function(params) {
      return params.data !== undefined && params.data.start !== undefined &&
        (params.data.end !== undefined || params.data.duration !== undefined);
    };
  

    exports.createCalendar = function(params) {
      if (!validParams(params)) {
        console.log('Event details missing.');
        return;
      }
  
      return generateCalendars(params.data);
    };
  })(this);

jQuery(document).ready(function() {


  $('.appy-add-calendar').each(function(e) {

    var calendarOptions = $(this).data('appy-add-calendar');

    if (typeof calendarOptions === 'object') {

      if (!('duration' in calendarOptions && calendarOptions.duration !== null && calendarOptions.duration.length)) {
        calendarOptions.duration = 60;
      }

      if ('start' in calendarOptions && calendarOptions.start !== null && calendarOptions.start.length) {
        calendarOptions.start = new Date(calendarOptions.start);
      }
      else {
        delete  calendarOptions.start;
      }
      if ('end' in calendarOptions && calendarOptions.end !== null && calendarOptions.end.length) {
        calendarOptions.end = new Date(calendarOptions.end);
      }
      else {
        delete  calendarOptions.end;
      }
      console.log(calendarOptions);

      var calendarLinks = createCalendar({
        data: calendarOptions
      });
      console.log('links:'+calendarOptions.title, calendarLinks);
      if (calendarLinks !== undefined && calendarLinks !== null) {
        $(this).find( '.appy-add-calendar-google').each(function(e) {
          $(this).attr('href', calendarLinks.google);
        });
        $(this).find( '.appy-add-calendar-yahoo').each(function(e) {
          $(this).attr('href', calendarLinks.yahoo);
        });
        $(this).find( '.appy-add-calendar-ical').each(function(e) {
          $(this).attr('href', calendarLinks.ical);
        });
        $(this).find( '.appy-add-calendar-outlook').each(function(e) {
          $(this).attr('href', calendarLinks.outlook);
        });
      }

    }

  });

});