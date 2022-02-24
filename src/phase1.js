import { fetchData } from "./lib/phase1/data-fetcher";

function sortSamplesBySecondsAndName(samples) {
  return samples.sort((a, b) => {
    return a.seconds === b.seconds
      ? (a.name > b.name ? 1 : -1) : a.seconds - b.seconds;
  });
}

function getSampleTr(sample) {
  const $tr = document.createElement("tr");
  $tr.innerHTML = `<tr><td>${sample.seconds}</td><td>${sample.name}</td><td>${sample.value}</td></tr>`;
  return $tr;
}

export async function printPhase1Samples() {
  const samples = await fetchData();
  const sortSamples = sortSamplesBySecondsAndName(samples);
  const $table = document.getElementById("samplesTable");
  sortSamples.forEach((sample) => {
    $table.appendChild(getSampleTr(sample));
  });
}

