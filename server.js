var orm = require("./config/orm");

orm.tableInfo("party_name", "parties");

orm.tableInfo("client_name", "clients");

orm.conditional("*", "parties", { party_type: "grown-up" });

orm.join(
  ["client_name", "party_name"],
  "parties",
  "clients",
  "client_id",
  "id"
);
