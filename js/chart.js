// chart setup
let margin = { top: 20, right: 50, bottom: 20, left: 70 };
let chart = d3.select('#chart-graphic');
let chartWidth = parseInt(chart.style('width'));
let width = chartWidth - margin.left - margin.right;
let x = d3.scaleLinear();
let y = d3.scaleBand();
let height;
let svg;
let group;

function drawChart() {
  // draw chart elements
  drawBars(patient.entries, 40);
  drawCircles(patient.events);
  drawAxis();
}

function drawBars(data, yTooltipOffset) {
  svg = chart.append('svg').attr('width', width + margin.left + margin.right);
  tooltipChart = chart.append('div').attr('class','chart-tooltip');
  group = svg.append('g').attr('transform', `translate(${margin.left}, 20)`);
  height = data.length * 50 - margin.top - margin.bottom;
  svg.attr('height', height + margin.top + margin.bottom);

  x.domain([0, 110])
    .range([0, width + margin.right]);

  y.range([0, height])
    .domain(data.map(d => { return d.name; }))
    .padding(0.1);

  // rectangles with transition
  const rect = group.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'rect')
    .attr('x', d => { return x(d.start); })
    .attr('y', d => { return y(d.name) + 5; })
    .attr('width', 0)
    .attr('height', y.bandwidth() - 8)
    .attr('fill', (d, i) => { return (d.type == 'condition') ? '#de1212' : '#1565c0' })
    .transition()
    .duration(500)
    .attr('width', d => { return x(d.value); });

  // rectangle labels
  group.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .attr('class', 'bar-labels')
    .attr('x', d => { return x(d.start) + 5})
    .attr('y', d => { return y(d.name) + y.bandwidth() / 1.5})
    .attr('text-anchor', 'start')
    .on('mousemove', (event, d) => {
      const f = d;
      tooltipMouseMove(f, f.name, f.start, f.value, yTooltipOffset);
    })
    .on('mouseout', (event) => {
      tooltipMouseOut();
    })
    .style('fill', '#fff')
    .text(d => { return d.name });
}

function drawCircles(events) {
  group.selectAll('circle')
      .data(events)
      .enter().append('circle')
      .attr('r', 7)
      .attr('cx', function (d) {
        return d.xVal;
      })
      .attr('cy', function (d) {
        return d.yVal;
      })
      /*
      .on('mousemove', (event, d) => {
        if (d.text) {
          tooltipCircle(d.text, d.url);
        }
      })
      .on('mouseout', (event) => {
        tooltipMouseOut();
      })
      */
      .on('click', (event, d) => {
        loadEncounter(d.encounterId);
        $('#chart-display').hide();
        $('#discharge-display').show();
        
        console.log('path', path);
        if (path=='timeline') {
          $('#discharge-path').hide();
          $('#timeline-path').show();
          $('#form-path').hide();
        } else if (path=='form') {
          $('#discharge-path').hide();
          $('#timeline-path').hide();
          $('#form-path').show();
        }
      })
      .transition()
      .duration(1000)
      .attr('opacity', 1);
}

function drawAxis() {
  const axisY = height + 4;

  group.append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0, ${axisY})`)
    .call(d3.axisBottom(x))
    .selectAll('text')
    .style('text-anchor', 'end');

  svg.append('text')
    .attr('class', 'x-label')
    .attr('text-anchor', 'end')
    .attr('x', 55)
    .attr('y', height + 30)
    .style('fill', '#999')
    .text('age');
}

const tooltipMouseMove = (d, key, start, value, yOffset) => {
  tooltipChart
    .html((d) => {
      const range = 'Age ' + start + ' - ' + (start+value);
      return (
        `<div class="chart-tooltip-content">
          <p><strong>${key}</strong></p>
          <p>${range}</p>
        </div>
        `
      );
    })
    .style('visibility', 'visible')
    .style('left', `${d3.pointer(event)[0] + 20}px`)
    .style('top', `${d3.pointer(event)[1] + yOffset}px`)
}

const tooltipCircle = (text, url) => {
  tooltipChart
    .html((d) => {
      return (
        `<div class="chart-tooltip-content">
          <p><strong>${text}</strong></p>
          <p><img src="${url}"/></p>
        </div>
        `
      );
    })
    .style('visibility', 'visible')
    .style('left', `${d3.pointer(event)[0] + 70}px`)
    .style('top', `${d3.pointer(event)[1]}px`)
}

const tooltipMouseOut = () => {
  tooltipChart
    .style('visibility', 'hidden')
}