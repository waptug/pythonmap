class USAMap {
  constructor() {
    this.map = L.map('map').setView([37.0902, -95.7129], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
  addMarker0() {
const marker0 = L.marker([32.361538, -86.279118]).addTo(this.map);
    const popupContent = '<b>Alabama</b><br><a href="http://www.alabama.gov" target="_blank">Official Website</a>';
    
    marker0.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker0.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker1() {
const marker1 = L.marker([58.301935, -134.41974]).addTo(this.map);
    const popupContent = '<b>Alaska</b><br><a href="http://alaska.gov" target="_blank">Official Website</a>';
    
    marker1.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker1.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker2() {
const marker2 = L.marker([33.448457, -112.073844]).addTo(this.map);
    const popupContent = '<b>Arizona</b><br><a href="https://az.gov" target="_blank">Official Website</a>';
    
    marker2.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker2.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker3() {
const marker3 = L.marker([34.736009, -92.331122]).addTo(this.map);
    const popupContent = '<b>Arkansas</b><br><a href="https://portal.arkansas.gov/" target="_blank">Official Website</a>';
    
    marker3.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker3.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker4() {
const marker4 = L.marker([38.555605, -121.468926]).addTo(this.map);
    const popupContent = '<b>California</b><br><a href="https://www.ca.gov/" target="_blank">Official Website</a>';
    
    marker4.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker4.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker5() {
const marker5 = L.marker([39.7391667, -104.984167]).addTo(this.map);
    const popupContent = '<b>Colorado</b><br><a href="https://www.colorado.gov/" target="_blank">Official Website</a>';
    
    marker5.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker5.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker6() {
const marker6 = L.marker([41.767, -72.685093]).addTo(this.map);
    const popupContent = '<b>Connecticut</b><br><a href="https://portal.ct.gov/" target="_blank">Official Website</a>';
    
    marker6.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker6.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker7() {
const marker7 = L.marker([39.161921, -75.526755]).addTo(this.map);
    const popupContent = '<b>Delaware</b><br><a href="https://delaware.gov/" target="_blank">Official Website</a>';
    
    marker7.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker7.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker8() {
const marker8 = L.marker([30.4518, -84.27277]).addTo(this.map);
    const popupContent = '<b>Florida</b><br><a href="http://www.myflorida.com/" target="_blank">Official Website</a>';
    
    marker8.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker8.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker9() {
const marker9 = L.marker([33.76, -84.39]).addTo(this.map);
    const popupContent = '<b>Georgia</b><br><a href="https://georgia.gov/" target="_blank">Official Website</a>';
    
    marker9.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker9.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker10() {
const marker10 = L.marker([21.30895, -157.826182]).addTo(this.map);
    const popupContent = '<b>Hawaii</b><br><a href="https://portal.ehawaii.gov/" target="_blank">Official Website</a>';
    
    marker10.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker10.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker11() {
const marker11 = L.marker([43.613739, -116.237651]).addTo(this.map);
    const popupContent = '<b>Idaho</b><br><a href="https://www.idaho.gov/" target="_blank">Official Website</a>';
    
    marker11.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker11.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker12() {
const marker12 = L.marker([39.78325, -89.650373]).addTo(this.map);
    const popupContent = '<b>Illinois</b><br><a href="https://www2.illinois.gov/" target="_blank">Official Website</a>';
    
    marker12.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker12.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker13() {
const marker13 = L.marker([39.790942, -86.147685]).addTo(this.map);
    const popupContent = '<b>Indiana</b><br><a href="https://www.in.gov/" target="_blank">Official Website</a>';
    
    marker13.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker13.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker14() {
const marker14 = L.marker([41.590939, -93.620866]).addTo(this.map);
    const popupContent = '<b>Iowa</b><br><a href="https://www.iowa.gov/" target="_blank">Official Website</a>';
    
    marker14.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker14.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker15() {
const marker15 = L.marker([39.04, -95.69]).addTo(this.map);
    const popupContent = '<b>Kansas</b><br><a href="https://www.kansas.gov/" target="_blank">Official Website</a>';
    
    marker15.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker15.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker16() {
const marker16 = L.marker([38.197274, -84.86311]).addTo(this.map);
    const popupContent = '<b>Kentucky</b><br><a href="https://kentucky.gov/" target="_blank">Official Website</a>';
    
    marker16.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker16.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker17() {
const marker17 = L.marker([30.45809, -91.140229]).addTo(this.map);
    const popupContent = '<b>Louisiana</b><br><a href="https://www.louisiana.gov/" target="_blank">Official Website</a>';
    
    marker17.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker17.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker18() {
const marker18 = L.marker([44.323535, -69.765261]).addTo(this.map);
    const popupContent = '<b>Maine</b><br><a href="https://www.maine.gov/portal/index.html" target="_blank">Official Website</a>';
    
    marker18.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker18.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker19() {
const marker19 = L.marker([38.972945, -76.490208]).addTo(this.map);
    const popupContent = '<b>Maryland</b><br><a href="https://www.maryland.gov/" target="_blank">Official Website</a>';
    
    marker19.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker19.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker20() {
const marker20 = L.marker([42.2352, -71.0275]).addTo(this.map);
    const popupContent = '<b>Massachusetts</b><br><a href="https://www.mass.gov/" target="_blank">Official Website</a>';
    
    marker20.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker20.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker21() {
const marker21 = L.marker([42.7335, -84.5467]).addTo(this.map);
    const popupContent = '<b>Michigan</b><br><a href="https://www.michigan.gov/" target="_blank">Official Website</a>';
    
    marker21.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker21.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker22() {
const marker22 = L.marker([44.95, -93.094]).addTo(this.map);
    const popupContent = '<b>Minnesota</b><br><a href="https://mn.gov/" target="_blank">Official Website</a>';
    
    marker22.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker22.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker23() {
const marker23 = L.marker([32.32, -90.207]).addTo(this.map);
    const popupContent = '<b>Mississippi</b><br><a href="https://www.ms.gov/" target="_blank">Official Website</a>';
    
    marker23.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker23.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker24() {
const marker24 = L.marker([38.572954, -92.189283]).addTo(this.map);
    const popupContent = '<b>Missouri</b><br><a href="https://www.mo.gov/" target="_blank">Official Website</a>';
    
    marker24.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker24.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker25() {
const marker25 = L.marker([46.595805, -112.027031]).addTo(this.map);
    const popupContent = '<b>Montana</b><br><a href="https://mt.gov/" target="_blank">Official Website</a>';
    
    marker25.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker25.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker26() {
const marker26 = L.marker([40.809868, -96.675345]).addTo(this.map);
    const popupContent = '<b>Nebraska</b><br><a href="https://www.nebraska.gov/" target="_blank">Official Website</a>';
    
    marker26.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker26.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker27() {
const marker27 = L.marker([39.160949, -119.767403]).addTo(this.map);
    const popupContent = '<b>Nevada</b><br><a href="http://nv.gov/" target="_blank">Official Website</a>';
    
    marker27.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker27.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker28() {
const marker28 = L.marker([43.220093, -71.549127]).addTo(this.map);
    const popupContent = '<b>New Hampshire</b><br><a href="https://www.nh.gov/" target="_blank">Official Website</a>';
    
    marker28.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker28.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker29() {
const marker29 = L.marker([40.221741, -74.756138]).addTo(this.map);
    const popupContent = '<b>New Jersey</b><br><a href="https://www.nj.gov/" target="_blank">Official Website</a>';
    
    marker29.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker29.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker30() {
const marker30 = L.marker([35.667231, -105.964575]).addTo(this.map);
    const popupContent = '<b>New Mexico</b><br><a href="https://www.newmexico.gov/" target="_blank">Official Website</a>';
    
    marker30.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker30.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker31() {
const marker31 = L.marker([42.659829, -73.781339]).addTo(this.map);
    const popupContent = '<b>New York</b><br><a href="https://www.ny.gov/" target="_blank">Official Website</a>';
    
    marker31.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker31.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker32() {
const marker32 = L.marker([35.771, -78.638]).addTo(this.map);
    const popupContent = '<b>North Carolina</b><br><a href="https://www.nc.gov/" target="_blank">Official Website</a>';
    
    marker32.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker32.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker33() {
const marker33 = L.marker([48.813343, -100.779004]).addTo(this.map);
    const popupContent = '<b>North Dakota</b><br><a href="https://www.nd.gov/" target="_blank">Official Website</a>';
    
    marker33.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker33.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker34() {
const marker34 = L.marker([39.962245, -83.000647]).addTo(this.map);
    const popupContent = '<b>Ohio</b><br><a href="https://ohio.gov/" target="_blank">Official Website</a>';
    
    marker34.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker34.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker35() {
const marker35 = L.marker([35.482309, -97.534994]).addTo(this.map);
    const popupContent = '<b>Oklahoma</b><br><a href="https://www.oklahoma.gov/" target="_blank">Official Website</a>';
    
    marker35.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker35.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker36() {
const marker36 = L.marker([44.931109, -123.029159]).addTo(this.map);
    const popupContent = '<b>Oregon</b><br><a href="https://www.oregon.gov/" target="_blank">Official Website</a>';
    
    marker36.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker36.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker37() {
const marker37 = L.marker([40.269789, -76.875613]).addTo(this.map);
    const popupContent = '<b>Pennsylvania</b><br><a href="https://www.pa.gov/" target="_blank">Official Website</a>';
    
    marker37.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker37.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker38() {
const marker38 = L.marker([41.82355, -71.422132]).addTo(this.map);
    const popupContent = '<b>Rhode Island</b><br><a href="http://www.ri.gov/" target="_blank">Official Website</a>';
    
    marker38.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker38.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker39() {
const marker39 = L.marker([34.0, -81.035]).addTo(this.map);
    const popupContent = '<b>South Carolina</b><br><a href="https://sc.gov/" target="_blank">Official Website</a>';
    
    marker39.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker39.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker40() {
const marker40 = L.marker([44.367966, -100.336378]).addTo(this.map);
    const popupContent = '<b>South Dakota</b><br><a href="https://sd.gov/" target="_blank">Official Website</a>';
    
    marker40.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker40.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker41() {
const marker41 = L.marker([36.165, -86.784]).addTo(this.map);
    const popupContent = '<b>Tennessee</b><br><a href="https://www.tn.gov/" target="_blank">Official Website</a>';
    
    marker41.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker41.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker42() {
const marker42 = L.marker([30.266667, -97.75]).addTo(this.map);
    const popupContent = '<b>Texas</b><br><a href="https://www.texas.gov/" target="_blank">Official Website</a>';
    
    marker42.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker42.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker43() {
const marker43 = L.marker([40.7547, -111.892622]).addTo(this.map);
    const popupContent = '<b>Utah</b><br><a href="https://utah.gov/" target="_blank">Official Website</a>';
    
    marker43.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker43.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker44() {
const marker44 = L.marker([44.26639, -72.57194]).addTo(this.map);
    const popupContent = '<b>Vermont</b><br><a href="https://www.vermont.gov/" target="_blank">Official Website</a>';
    
    marker44.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker44.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker45() {
const marker45 = L.marker([37.54, -77.46]).addTo(this.map);
    const popupContent = '<b>Virginia</b><br><a href="https://www.virginia.gov/" target="_blank">Official Website</a>';
    
    marker45.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker45.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker46() {
const marker46 = L.marker([47.042418, -122.893077]).addTo(this.map);
    const popupContent = '<b>Washington</b><br><a href="https://access.wa.gov/" target="_blank">Official Website</a>';
    
    marker46.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker46.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker47() {
const marker47 = L.marker([38.349497, -81.633294]).addTo(this.map);
    const popupContent = '<b>West Virginia</b><br><a href="https://www.wv.gov/" target="_blank">Official Website</a>';
    
    marker47.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker47.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker48() {
const marker48 = L.marker([43.074722, -89.384444]).addTo(this.map);
    const popupContent = '<b>Wisconsin</b><br><a href="https://www.wisconsin.gov/" target="_blank">Official Website</a>';
    
    marker48.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker48.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker49() {
const marker49 = L.marker([41.145548, -104.802042]).addTo(this.map);
    const popupContent = '<b>Wyoming</b><br><a href="http://www.wyo.gov/" target="_blank">Official Website</a>';
    
    marker49.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker49.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker50() {
const marker50 = L.marker([13.4735, 144.7489]).addTo(this.map);
    const popupContent = '<b>Guam</b><br><a href="https://www.guam.gov/" target="_blank">Official Website</a>';
    
    marker50.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker50.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker51() {
const marker51 = L.marker([15.1851, 145.6748]).addTo(this.map);
    const popupContent = '<b>Northern Mariana Islands</b><br><a href="https://www.gov.mp/" target="_blank">Official Website</a>';
    
    marker51.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker51.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker52() {
const marker52 = L.marker([18.4663, -66.1057]).addTo(this.map);
    const popupContent = '<b>Puerto Rico</b><br><a href="https://www.pr.gov/" target="_blank">Official Website</a>';
    
    marker52.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker52.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker53() {
const marker53 = L.marker([-14.2766, -170.6926]).addTo(this.map);
    const popupContent = '<b>American Samoa</b><br><a href="https://www.americansamoa.gov/" target="_blank">Official Website</a>';
    
    marker53.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker53.on('mouseout', function() {
      this.closePopup();
    });
  }
  addMarker54() {
const marker54 = L.marker([18.3419, -64.9321]).addTo(this.map);
    const popupContent = '<b>U.S. Virgin Islands</b><br><a href="https://www.vi.gov/" target="_blank">Official Website</a>';
    
    marker54.on('mouseover', function() {
      this.bindPopup(popupContent).openPopup();
    });

    marker54.on('mouseout', function() {
      this.closePopup();
    });
  }
}
const usaMap = new USAMap();
usaMap.addMarker0();
usaMap.addMarker1();
usaMap.addMarker2();
usaMap.addMarker3();
usaMap.addMarker4();
usaMap.addMarker5();
usaMap.addMarker6();
usaMap.addMarker7();
usaMap.addMarker8();
usaMap.addMarker9();
usaMap.addMarker10();
usaMap.addMarker11();
usaMap.addMarker12();
usaMap.addMarker13();
usaMap.addMarker14();
usaMap.addMarker15();
usaMap.addMarker16();
usaMap.addMarker17();
usaMap.addMarker18();
usaMap.addMarker19();
usaMap.addMarker20();
usaMap.addMarker21();
usaMap.addMarker22();
usaMap.addMarker23();
usaMap.addMarker24();
usaMap.addMarker25();
usaMap.addMarker26();
usaMap.addMarker27();
usaMap.addMarker28();
usaMap.addMarker29();
usaMap.addMarker30();
usaMap.addMarker31();
usaMap.addMarker32();
usaMap.addMarker33();
usaMap.addMarker34();
usaMap.addMarker35();
usaMap.addMarker36();
usaMap.addMarker37();
usaMap.addMarker38();
usaMap.addMarker39();
usaMap.addMarker40();
usaMap.addMarker41();
usaMap.addMarker42();
usaMap.addMarker43();
usaMap.addMarker44();
usaMap.addMarker45();
usaMap.addMarker46();
usaMap.addMarker47();
usaMap.addMarker48();
usaMap.addMarker49();
usaMap.addMarker50();
usaMap.addMarker51();
usaMap.addMarker52();
usaMap.addMarker53();
usaMap.addMarker54();
