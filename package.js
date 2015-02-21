Package.describe({
  summary: "SlickGrid package for meteor"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
      'lib/SlickGrid/slick-default-theme.css',
      'lib/SlickGrid/slick.grid.css',

      'lib/SlickGrid/lib/jquery.event.drop-2.2.js',
      'lib/SlickGrid/lib/jquery.event.drag-2.2.js',

      'lib/SlickGrid/slick.core.js',
      'lib/SlickGrid/slick.dataview.js',
      'lib/SlickGrid/slick.editors.js',
      'lib/SlickGrid/slick.formatters.js',
      'lib/SlickGrid/slick.groupitemmetadataprovider.js',
      'lib/SlickGrid/slick.grid.js',
      'lib/SlickGrid/slick.remotemodel.js',

      'lib/SlickGrid/controls/slick.columnpicker.js',
      'lib/SlickGrid/controls/slick.columnpicker.css',

      'lib/SlickGrid/plugins/slick.cellselectionmodel.js',
      'lib/SlickGrid/plugins/slick.cellrangeselector.js',
      'lib/SlickGrid/plugins/slick.cellcopymanager.js',
      'lib/SlickGrid/plugins/slick.cellrangedecorator.js',
      'lib/SlickGrid/plugins/slick.rowselectionmodel.js',
      'lib/SlickGrid/plugins/slick.checkboxselectcolumn.js',

      'lib/SlickGrid/images/header-columns-bg.gif',
      'lib/SlickGrid/images/header-columns-over-bg.gif'
    ]
    ,'client'
  );
});
