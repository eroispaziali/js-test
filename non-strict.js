function foo() {
  var title = "Not the page title";
  with (document) {
    write(title + "<br />");
    write("contains a with statement");
  }
}