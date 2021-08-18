function createQueryParams(params) {
  let paramsArray = [];
  for (let i = 0; i < params.length; i++) {
    paramsArray.push(`cat${i}=${params[i]}`);
  }
  return paramsArray.join("&");;
}

function getParks(event) {
  event.preventDefault();
  let queryParams = captureCheckedActivities();
  let queryParamsPath = createQueryParams(queryParams);
  window.location.replace("/parks?" + queryParamsPath);

}

document.querySelector("#find-parks").addEventListener("click", getParks);
