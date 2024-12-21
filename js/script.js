$(document).ready(function () {
  console.log("Document is ready!");

  // Hide the product card initially
  $(".product-card").hide();

  $(".view-products-btn").on("click", function () {
    console.log("View Products button clicked!");
    $(".dashboard-container").hide();
    $(".product-card").show();
    console.log("Product card should now be visible.");
  });

  $(".close-icon").on("click", function () {
    console.log("Close icon clicked!");
    $(".product-card").hide();
    $(".dashboard-container").show();
    console.log("Dashboard cards should now be visible.");
  });
});
