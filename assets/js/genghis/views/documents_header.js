define([
    'underscore', 'backbone', 'genghis/views/view', 'genghis/views', 'hgn!genghis/templates/documents_header', 'backbone.declarative'
], function(_, Backbone, View, Views, template, _1) {

    return Views.DocumentsHeader = View.extend({
        template: template,

        modelEvents: {
            'change': 'render'
        },

        serialize: function() {
            var from  = '';
            var to    = '';
            var count = this.model.get('count');
            var page  = this.model.get('page');
            var limit = this.model.get('limit');
            var total = this.model.get('total');

            if (total != count) {
                from = ((page - 1) * limit) + 1;
                to   = Math.min((((page - 1) * limit) + count), total);
            }

            return {
                total:  total,
                range:  (total != count),
                from:   from,
                to:     to,
                plural: (total != 1)
            };
        }
    });
});
