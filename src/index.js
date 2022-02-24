import "./assets/css/styles.css";

import { fetchData } from "./lib/phase1/data-fetcher";
import { fetchData2 } from "./lib/phase2/data-fetcher";


function sortSamplesBySecondsAndName(samples){
  return samples.sort((a, b) => {
    return a.seconds === b.seconds ? (a.name > b.name ? 1 : -1) :
     a.seconds -b.seconds;
  });
}

function getSampleTr(sample) {
  const $tr = document.createElement('tr');
  $tr.innerHTML = `<tr><td>${sample.seconds}</td><td>${sample.name}</td><td>${sample.value}</td></tr>`;
  return $tr;
}

export async function printSamples() {
  const samples = await fetchData();
  const sortSamples = sortSamplesBySecondsAndName(samples);
  const $table = document.getElementById("samplesTable");
  sortSamples.forEach(sample => {
    $table.appendChild(getSampleTr(sample));
  });
}

export async function printSamples2() {
  const data = await fetchData2();
  const dict = {};
  data.forEach(d => {
    console.log(d);
  });
  // const sortSamples = sortSamplesBySecondsAndName(samples);
  // const $table = document.getElementById("samplesTable2");
  // sortSamples.forEach(sample => {
  //   $table.appendChild(getSampleTr(sample));
  // });
}

//TODO PHASE 1 AND PHASE 2 in different files
printSamples();
printSamples2();

