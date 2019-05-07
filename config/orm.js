var connection = require("./connection");

var orm = {
  tableInfo: function(column, table) {
    connection.query("Select ?? from ??", [column, table], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  },
  conditional: function(column, table, where) {
    connection.query(
      "Select ?? from ?? where ?",
      [column, table, where],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  join: function(column, tableOne, tableTwo, tableOneId, tabletwoId) {
    connection.query(
      "select?? from ?? as tb1 Inner join ?? as tb2 on tb1.?? = tb2.??",
      [column, tableOne, tableTwo, tableOneId, tabletwoId],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};
