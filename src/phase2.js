import { fetchData } from "./lib/phase2/data-fetcher";

function getGroupTr(group) {
  const $tr = document.createElement("tr");
  $tr.innerHTML = `<tr><td>${group[0]}</td><td>${group[1].length}</td><td>${group[1].join(', ')}</td></tr>`;
  return $tr;
}

function sortParseData(data) {
  data.forEach((d) => {
    d[1].sort((a, b) => (a > b ? 1 : -1));
  });
  data.sort((a, b) => a[0] - b[0]);
  return data;
}

function parseSamplesDataToTable(samples) {
  const dict = {};
  samples.forEach((sample) => {
    const variableData = `${sample.name}(${sample.value})`;
    if (dict[sample.seconds]) {
      dict[sample.seconds].push(variableData);
    } else {
      dict[sample.seconds] = [variableData];
    }
  });
  return Object.entries(dict);
}

export async function printPhase2Samples() {
  const samples = await fetchData();
  const parseData = parseSamplesDataToTable(samples);
  const sortData = sortParseData(parseData);
  const $table = document.getElementById("samplesTable2");
  sortData.forEach(group => {
    $table.appendChild(getGroupTr(group));
  });
}
