function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});


function files(index) {
  var data = `
  ./news/new (1).jpg
  ./news/new (2).jpg
  ./news/new (3).jpg
  ./news/new (4).jpg
  ./news/new (5).jpg
  ./news/new (6).jpg
  ./news/new (7).jpg
  ./news/new (8).jpg
  ./news/new (9).jpg
  ./news/new (10).jpg
  ./news/new (11).jpg
  ./news/new (12).jpg
  ./news/new (13).jpg
  ./news/new (14).jpg
  ./news/new (15).jpg
  ./news/new (16).jpg
  ./news/new (17).jpg
  ./news/new (18).jpg
  ./news/new (19).jpg
  ./news/new (20).jpg
  ./news/new (21).jpg
  ./news/new (22).jpg
  ./news/new (23).jpg
  ./news/new (24).jpg
  ./news/new (25).jpg
  ./news/new (26).jpg
  ./news/new (27).jpg
  ./news/new (28).jpg
  ./news/new (29).jpg
  ./news/new (30).jpg
  ./news/new (31).jpg
  ./news/new (32).jpg
  ./news/new (33).jpg
  ./news/new (34).jpg
  ./news/new (35).jpg
  ./news/new (36).jpg
  ./news/new (37).jpg
  ./news/new (38).jpg
  ./news/new (39).jpg
  ./news/new (40).jpg
  ./news/new (41).jpg
  ./news/new (42).jpg
  ./news/new (43).jpg
  ./news/new (44).jpg
  ./news/new (45).jpg
  ./news/new (46).jpg
  ./news/new (47).jpg
  ./news/new (48).jpg
  ./news/new (49).jpg
  ./news/new (50).jpg
  ./news/new (51).jpg
  ./news/new (52).jpg
  ./news/new (53).jpg
  ./news/new (54).jpg
  ./news/new (55).jpg
  ./news/new (56).jpg
  ./news/new (57).jpg
  ./news/new (58).jpg
  ./news/new (59).jpg
  ./news/new (60).jpg
  ./news/new (61).jpg
  ./news/new (62).jpg
  ./news/new (63).jpg
  ./news/new (64).jpg
  ./news/new (65).jpg
  ./news/new (66).jpg
  ./news/new (67).jpg
  ./news/new (68).jpg
  ./news/new (69).jpg
  ./news/new (70).jpg
  ./news/new (71).jpg
  ./news/new (72).jpg
  ./news/new (73).jpg
  ./news/new (74).jpg
  ./news/new (75).jpg
  ./news/new (76).jpg
  ./news/new (77).jpg
  ./news/new (78).jpg
  ./news/new (79).jpg
  ./news/new (80).jpg
  ./news/new (81).jpg
  ./news/new (82).jpg
  ./news/new (83).jpg
  ./news/new (84).jpg
  ./news/new (85).jpg
  ./news/new (86).jpg
  ./news/new (87).jpg
  ./news/new (88).jpg
  ./news/new (89).jpg
  ./news/new (90).jpg
  ./news/new (91).jpg
  ./news/new (92).jpg
  ./news/new (93).jpg
  ./news/new (94).jpg
  ./news/new (95).jpg
  ./news/new (96).jpg
  ./news/new (97).jpg
  ./news/new (98).jpg
  ./news/new (99).jpg
  ./news/new (100).jpg
  ./news/new (101).jpg
  ./news/new (102).jpg
  ./news/new (103).jpg
  ./news/new (104).jpg
  ./news/new (105).jpg
  ./news/new (106).jpg
  ./news/new (107).jpg
  ./news/new (108).jpg
  ./news/new (109).jpg
  ./news/new (110).jpg
  ./news/new (111).jpg
  ./news/new (112).jpg
  ./news/new (113).jpg
  ./news/new (114).jpg
  ./news/new (115).jpg
  ./news/new (116).jpg
  ./news/new (117).jpg
  ./news/new (118).jpg
  ./news/new (119).jpg
  ./news/new (120).jpg
  ./news/new (121).jpg
  ./news/new (122).jpg
  ./news/new (123).jpg
  ./news/new (124).jpg
  ./news/new (125).jpg
  ./news/new (126).jpg
  ./news/new (127).jpg
  ./news/new (128).jpg
  ./news/new (129).jpg
  ./news/new (130).jpg
  ./news/new (131).jpg
  ./news/new (132).jpg
  ./news/new (133).jpg
  ./news/new (134).jpg
  ./news/new (135).jpg
  ./news/new (136).jpg
  ./news/new (137).jpg
  ./news/new (138).jpg
  ./news/new (139).jpg
  ./news/new (140).jpg
  ./news/new (141).jpg
  ./news/new (142).jpg
  ./news/new (143).jpg
  ./news/new (144).jpg
  ./news/new (145).jpg
  ./news/new (146).jpg
  ./news/new (147).jpg
  ./news/new (148).jpg
  ./news/new (149).jpg
  ./news/new (150).jpg
  ./news/new (151).jpg
  ./news/new (152).jpg
  ./news/new (153).jpg
  ./news/new (154).jpg
  ./news/new (155).jpg
  ./news/new (156).jpg
  ./news/new (157).jpg
  ./news/new (158).jpg
  ./news/new (159).jpg
  ./news/new (160).jpg
  ./news/new (161).jpg
  ./news/new (162).jpg
  ./news/new (163).jpg
  ./news/new (164).jpg
  ./news/new (165).jpg
  ./news/new (166).jpg
  ./news/new (167).jpg
  ./news/new (168).jpg
  ./news/new (169).jpg
  ./news/new (170).jpg
  ./news/new (171).jpg
  ./news/new (172).jpg
  ./news/new (173).jpg
  ./news/new (174).jpg
  ./news/new (175).jpg
  ./news/new (176).jpg
  ./news/new (177).jpg
  ./news/new (178).jpg
  ./news/new (179).jpg
  ./news/new (180).jpg
  ./news/new (181).jpg
  ./news/new (182).jpg
  ./news/new (183).jpg
  ./news/new (184).jpg
  ./news/new (185).jpg
  ./news/new (186).jpg
  ./news/new (187).jpg
  ./news/new (188).jpg
  ./news/new (189).jpg
  ./news/new (190).jpg
  ./news/new (191).jpg
  ./news/new (192).jpg
  ./news/new (193).jpg
  ./news/new (194).jpg
  `;
  return data.split("\n")[index];
}

const frameCount = 194;


const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `300% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `300% top`,
});



