import React from 'react';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';

const d3 = {
  ...d3Scale,
  ...d3Array
} as const;

const zero = Symbol(0);
type zero = typeof zero;

enum M {
  glcls,
  x15decc,
  jueg01,
  the6p4c,
  mythousandfaces,
  jonhailothry,
  spinachkid,
  iwasawafag,
  zsaberslash,
  fugiman,
  kvetchingkrist,
  domhynes,
  blebbloob,
  iamhajimari,
  shazbot885,
  tomnomnom,
  drploxo,
  kinek_kirin,
  guitarpunkmast1,
  animedestroyer,
  nilscaspar,
  cji,
  lululandd,
  helenangel,
  alabapsi,
  iximeow,
  snwlol,
  goalstopper01,
  extrasharpchedd,
  garethlewin,
  darkredrover,
  pipejtv,
  itsturnerr,
  rennedexv,
  ruderubik,
  _0xamanda,
  ppalling,
  rats_god,
  fire,
  worldwise001,
  kaerrigan,
  nuggetmoist_,
  gordini616,
  nekunekus,
  nslons,
  ___fisk,
  ahedgewizard,
  ptr_sad,
  dcted,
  scrxtchy,
  hooootdoooogs,
  bts_twt
}

const getRealTwitterHandle:
  (v: M) => string
=
  v => M[v].replace(/^_/, '')
;


type Entry = readonly [M, string] | M;

const AsskickChart = [
  // most would kick my ass on this end
  M.dcted,
  M.ruderubik,
  M.kaerrigan,
  M.jonhailothry,
  M.x15decc,
  M.animedestroyer,
  M.kvetchingkrist,
  M.mythousandfaces,
  M.___fisk,
  M.iwasawafag,
  M.domhynes,
  M.cji,
  M.alabapsi,
  M.shazbot885,
  M.hooootdoooogs,
  zero,
  M.fugiman,
  M.helenangel,
  M.kinek_kirin,
  M.the6p4c,
  M.garethlewin,
  M.goalstopper01,
  M.nilscaspar,
  M.worldwise001,
  M.glcls,
  M.blebbloob,
  M.nslons,
  M.ahedgewizard,
  M.scrxtchy,
  M.rats_god,
  M.guitarpunkmast1,
  M.zsaberslash,
  M.rennedexv,
  M.tomnomnom,
  M.pipejtv,
  M.bts_twt,
  M.extrasharpchedd,
  M.iximeow,
  M.spinachkid,
  M.itsturnerr,
  M.nuggetmoist_,
  M.gordini616,
  M.jueg01,
  M.iamhajimari,
  M.drploxo,
  M.snwlol,
  M.ppalling,
  M.fire,
  M.nekunekus,
  M.darkredrover,
  M.ptr_sad,
  M._0xamanda,
  M.lululandd,

] as const;

const Entry:
  (e: Entry) => { mutual: M, caption?: string }
=
  (e) => {
    const v = e instanceof Array?
      e: [e];

    return {
      mutual: v[0],
      caption: v[1]
    }
  }
;

const count:
  <T>(v: readonly T[]) => Map<T, number>
=
  <T extends any>(v: T[]) =>{
    const m = new Map<T, number>();
    for (const e of v) {
      m.set(e, (m.get(e) ?? 0) +1 )
    }

    return m
  }
;

for (const [v, c] of count(AsskickChart)) {
  if (v == zero) {
    if (c > 1) throw new Error(zero.toString());
    continue;
  }

  if (c > 1) throw new Error(`${M[Entry(v).mutual]} is duplicated.`);
}


const FightChart = [
  // most fightable
  [M.jonhailothry, "just to see what happens"],
  [M.iwasawafag, 'i dont have an explanation for this'],
  [M.fugiman, "i dont want to fight you, but i feel like it is natural"],
  M.iamhajimari,
  M.shazbot885,
  [M.kinek_kirin, "you just know too much about plants"],
  M.drploxo,
  [M.lululandd, 'it might be cool somehow'],
  M.nekunekus,

  [M.kvetchingkrist, 'i sense a fighting energy in you i have no intention of provoking'],
  M.bts_twt,
  [M.tomnomnom, 'i have no interest in fighting you honestly, but in a metaphorical sort of sense it might be interesting'],

  M.rats_god,
  M.snwlol,
  M.goalstopper01,

  M.rennedexv,
  M.fire,
  M.ppalling,
  M.___fisk,
  M.scrxtchy,
  M.ahedgewizard,

  zero,


  [M.mythousandfaces, 'i respect, but i think we would possibly do it just to see what happens'],

  M.nuggetmoist_,

  M.alabapsi,
  M.garethlewin,
  [M.iximeow, 'i have no explanation for this'],
  M.helenangel,
  M.worldwise001,
  M.guitarpunkmast1,
  M.gordini616,
  M.itsturnerr,
  M.blebbloob,
  M.domhynes,
  M.cji,
  M.zsaberslash,
  M.extrasharpchedd,
  M.spinachkid,
  M.jueg01,
  M.nslons,
  M.the6p4c,
  M.ptr_sad,
  M.darkredrover,
  M.nilscaspar,
  M.hooootdoooogs,
  [M.kaerrigan, 'out of fear, mostly'],
  M.ruderubik,
  [M.animedestroyer, 'i remember you were always good. i do not wish to fight'],
  [M.x15decc, 'i would be physically and psychologically unable to'],
  M.pipejtv,
  [M.glcls, 'i cannot visualise it'],
  M._0xamanda,
  M.dcted
] as const;

for (const [v, c] of count(FightChart)) {
  if (v == zero) {
    if (c > 1) throw new Error(zero.toString());
    continue;
  }

  if (c > 1) throw new Error(`${M[Entry(v).mutual]} is duplicated.`);
}

type Ranking = readonly (Entry | zero)[];
type ArrayValue<T> = T extends readonly (infer P)[] ? P : never;
type RankedDatum = readonly [M, number, string?]
type RankedData = readonly RankedDatum[];

const rankData:
  (data: Ranking) => RankedData
  =
  data => {
    let o: [M, number, string?][] = [];
    const zi = data.indexOf(zero);
    if (!zi) throw new Error();
    const gtZ = data.slice(0, zi);
    const ltZ = data.slice(zi + 1);
    let i = 0;
    for (const entry of gtZ.reverse()) {
      const [mutual, caption] = entry instanceof Array ?
        entry : [entry, void 0];

      o.push([mutual, i + 1, caption]);
      i++;
    }

    i = 0;
    for (const entry of ltZ) {
      const [mutual, caption] = entry instanceof Array ?
        entry : [entry, void 0];

      o.push([mutual, -i -1, caption]);
      i++;
    }

    return o;
  }
;

const fightsData = rankData(FightChart);
const asskickData = rankData(AsskickChart);

const Graph:
  () => React.ReactElement
=
  () => {
    const ref = React.useRef();
    // we now need to associate every point with its data
    // on both axes

    const collate = new Map<M, {
      fights?: RankedDatum,
      asskicks?: RankedDatum
    }>();

    for (const [m, magnitude, caption] of fightsData) {
      const cv = collate.get(m) ?? {};
      cv.fights = [m, magnitude, caption];
      collate.set(m, cv)
    }

    for (const [m, magnitude, caption] of asskickData) {
      const cv = collate.get(m) ?? {};
      cv.asskicks = [m, magnitude, caption];
      collate.set(m, cv);
    }

    for (const [m, c] of collate) {

      if (c.asskicks == undefined)
        console.error(`${M[m]} is missing an ass kick rating`);

      if (c.fights == undefined)
        console.error(`${M[m]} is missing a fights rating`)
    }


    const evenRange:
      (v: [number, number]) => [number, number]
    =
      v => {
        const k = Math.max(...v.map(i => Math.abs(i)))
        return [-k, k]
      }
    ;

    const ypts = fightsData.map(([, r]) => r);

    const yminmax = evenRange(d3.extent(ypts));

    const range = [5, 95];

    const yscale = d3.scaleLinear()
      .domain([yminmax[0], yminmax[1]])
      .range(range);

    const xminmax = evenRange(d3.extent(asskickData.map(([, r]) => r)));

    const xscale = d3.scaleLinear()
      .domain(xminmax)
      .range(range);

    const imgW = xscale(1) - xscale(0);
    const imgH = yscale(1) - yscale(0);

    return <svg ref={ref}

        style={{ width: "100vw", height: "100vh"}}
      >

        <defs>
          <linearGradient id="xscale" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="orange"/>
            <stop offset="100%" stopColor="lime"/>
          </linearGradient>


          <linearGradient id="yscale" gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(65)">
            <stop offset="0%" stopColor="red"/>
            <stop offset="100%" stopColor="pink"/>
          </linearGradient>
        </defs>
        <svg>


          {/* y axis */}
          <line {...{
            x1: `${xscale(0)}%`,
            y1: `${yscale(yminmax[1])}%`,
            x2: `${xscale(0)}%`,
            y2: `${yscale(yminmax[0])}%`,
            strokeWidth: `${imgW/2}%`,
            stroke: "url('#yscale')",
            opacity: '.5'
          }}/>

          {/* x axis */}
          <line {...{
            opacity: '.5',
            x1: `${xscale(xminmax[0])}%`,
            y1: `${yscale(0)}%`,
            x2: `${xscale(xminmax[1])}%`,
            y2: `${yscale(0)}%`,
            strokeWidth: `${imgW/2}%`,
            stroke: "url('#xscale')"
          }}/>


        {/* y axis caption */}
        <text {...{
          x: `${xscale(0)}%`,
          y: `${yscale(yminmax[1])}%`,
          textAnchor: 'middle'
        }}>I want to fight them</text>

        <text {...{
          x: `${xscale(0)}%`,
          y: `${yscale(yminmax[0])}%`,
          textAnchor: 'middle'
        }}>I do not want to fight them</text>

        {/*x axis caption*/}
        <text {...{
          x: `${xscale(xminmax[0])}%`,
          y: `${yscale(0)}%`,
          textAnchor: 'middle'
        }}>I would kick their ass</text>

        <text {...{
          x: `${xscale(xminmax[1])}%`,
          y: `${yscale(0)}%`,
          textAnchor: 'middle'
        }}>They could kick my ass</text>

      {[...collate].map(([m, d], i) => {
        if (!d.asskicks || !d.fights) return null;
        return <React.Fragment key={i}>
      <clipPath id={`clipCircle-${i}`}>
        <ellipse rx={`${imgW/2}%`} ry={`${imgH/2}%`}

            cx={`${xscale(d.asskicks[1]) + (imgW/2)}%`}
            cy={`${yscale(d.fights[1]) + (imgH/2)}%`}

        />
      </clipPath>
          <image {...{
            x: `${xscale(d.asskicks[1])}%`,
            y: `${yscale(d.fights[1])}%`,
            width: `${imgW}%`,
            height: `${imgH}%`,
            href: `https://twitter-avatar.now.sh/${getRealTwitterHandle(m)}`,

            clipPath: `url(#clipCircle-${i})`
          }}/>

          <text {...{
            x: `${xscale(d.asskicks[1]) + imgW}%`,
            y: `${yscale(d.fights[1]) + imgH/2}%`,
            "data-d": JSON.stringify(d),

          }}>@{getRealTwitterHandle(m)}</text>
        </React.Fragment>
      })}
      </svg>
    </svg>
  }
;


const Cmp = () => <>
  <Graph/>
</>

export default Cmp;
