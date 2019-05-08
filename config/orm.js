var connection = require("./connection");

var orm = {
  tableInfo: function(column, table) {
    connection.query("Select ?? from ??", [column, table], function(
      err,
      result
    ) {
      if (err) throw err;
      console.table(result);
    });
  },
  conditional: function(column, table, where) {
    connection.query(
      "Select ?? from ?? where ?",
      [column, table, where],
      function(err, result) {
        if (err) throw err;
        console.table(result);
      }
    );
  },
  join: function(column, tableOne, tableTwo, tableOneId, tableTwoId) {
    connection.query(
      "select ?? from ?? as tb1 inner join ?? as tb2 on tb1.?? = tb2.??",
      [column, tableOne, tableTwo, tableOneId, tableTwoId],
      function(err, result) {
        if (err) throw err;
        console.table(result);
      }
    );
  }
};

module.exports = orm;
