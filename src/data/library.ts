/** 资料库：给大人和大孩子继续往下查的出处，按来源分组 */
export type LibraryItem = { label: string; url: string; note: string };
export type LibraryShelf = { title: string; emoji: string; items: readonly LibraryItem[] };

export const library: readonly LibraryShelf[] = [
  {
    title: "国际和国家计量机构", emoji: "🏛️",
    items: [
      { label: "BIPM：国际单位制手册（第 9 版）", url: "https://www.bipm.org/en/publications/si-brochure", note: "7 个基本单位、导出单位、词头的正式文本，有中文版。" },
      { label: "BIPM：SI 基本单位", url: "https://www.bipm.org/en/measurement-units/si-base-units", note: "每个基本单位的定义和历史。" },
      { label: "BIPM：第 26 届国际计量大会第 1 号决议（2018）", url: "https://www.bipm.org/en/committees/cg/cgpm/26-2018/resolution-1", note: "2019 年 5 月 20 日起用 7 个定义常数定义国际单位制。" },
      { label: "BIPM：《米制公约》", url: "https://www.bipm.org/en/metre-convention", note: "1875 年条约和国际计量合作的框架。" },
      { label: "NIST：SI 重新定义", url: "https://www.nist.gov/si-redefinition", note: "美国国家标准与技术研究院的科普专题，每个单位一页。" },
      { label: "NIST：测量系统简史", url: "https://www.nist.gov/pml/owm/metric-si/brief-history-measurement-systems", note: "从肘尺、英制到米制。" },
      { label: "中国计量科学研究院", url: "https://www.nim.ac.cn/", note: "我国的国家计量院，保存和复现国家计量基准。" },
      { label: "世界计量日", url: "https://www.worldmetrologyday.org/", note: "每年 5 月 20 日，纪念《米制公约》签署。" }
    ]
  },
  {
    title: "我国的计量制度", emoji: "📜",
    items: [
      { label: "国务院关于统一我国计量制度的命令（1959）", url: "http://www.ce.cn/xwzx/gnsz/szyw/200706/05/t20070605_11607815.shtml", note: "确定米制为基本计量制度，市制保留，一斤改为十两。" },
      { label: "国务院关于在我国统一实行法定计量单位的命令（1984）", url: "https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/jjjzs/art/2023/art_ee15a7f377414ebbbfe6eac435da83ba.html", note: "以国际单位制为基础的法定计量单位，1990 年底前完成过渡。" },
      { label: "外交部：中国参加国际公约情况一览表", url: "https://www.mfa.gov.cn/wjb_673085/zfxxgk_674865/gknrlb/tywj/tyqk/200303/t20030324_9867259.shtml", note: "我国 1977 年 5 月 9 日加入《米制公约》。" },
      { label: "清华大学科学博物馆：计量技术的发展——从实物到量子", url: "https://tsm.tsinghua.edu.cn/?p=13281", note: "从民国度量衡法讲到量子计量。" }
    ]
  },
  {
    title: "博物馆里的度量衡", emoji: "🏺",
    items: [
      { label: "中国国家博物馆：八斤铜权", url: "https://en.chnmuseum.cn/collections_577/collection_highlights_608/artifacts_handed___down_from_ancient_times_612/202008/t20200827_247511.html", note: "秦代的秤砣，看“衡”怎样被统一。" },
      { label: "中国国家博物馆：铜量", url: "https://en.chnmuseum.cn/collections_577/collection_highlights_608/artifacts_handed___down_from_ancient_times_612/202008/t20200811_246886.html", note: "古代的标准量器。" },
      { label: "河南博物院：秦始皇二十六年诏版铜权", url: "https://english.chnmus.net/en/collection/details.html?id=7246090676213911552", note: "秤砣上刻着统一度量衡的诏书。" }
    ]
  },
  {
    title: "好读的文章", emoji: "📰",
    items: [
      { label: "Physics World：米是怎样演变的", url: "https://physicsworld.com/a/the-evolution-of-the-metre-how-a-product-of-the-french-revolution-became-a-mainstay-of-worldwide-scientific-collaboration/", note: "从法国大革命到全世界的科学合作。" },
      { label: "The Conversation：150 年前的《米制公约》", url: "https://theconversation.com/150-years-ago-the-metre-convention-determined-how-we-measure-the-world-a-radical-initiative-for-the-time-252108", note: "《米制公约》为什么在当时很大胆。" },
      { label: "ABC News：《米制公约》150 周年", url: "https://www.abc.net.au/news/science/2025-05-20/metre-treaty-anniversary-metric-system-measurement-metrology/105302024", note: "米制和现代计量学的来龙去脉。" },
      { label: "BIPM：Ken Alder 谈米的起源", url: "https://www.bipm.org/en/-/2025-09-24-bipm150-interview-prof-ken-alder-origins-of-the-metre-1", note: "《万物的尺度》作者的访谈。" }
    ]
  },
  {
    title: "百科、年表和书", emoji: "📚",
    items: [
      { label: "Britannica：公制", url: "https://www.britannica.com/science/measurement-system/The-metric-system-of-measurement", note: "核对事实的百科条目。" },
      { label: "Britannica：肘尺", url: "https://www.britannica.com/science/cubit", note: "古埃及肘尺的长度和用法。" },
      { label: "US Metric Association：公制年表", url: "https://usma.org/a-chronology-of-the-metric-system", note: "按年份列出公制的大事。" },
      { label: "Ken Alder《万物的尺度》", url: "https://books.google.com/books/about/The_Measure_of_All_Things.html?id=ATdJGs9WvY0C", note: "两位天文学家量地球定一米的故事。" },
      { label: "《中国古代度量衡史》（英文版）", url: "https://books.google.com/books/about/The_History_of_Ancient_Chinese_Measures.html?id=EbytDwAAQBAJ", note: "中国历代度量衡的专题书。" },
      { label: "圣安德鲁斯大学：巴比伦数字", url: "https://mathshistory.st-andrews.ac.uk/HistTopics/Babylonian_numerals/", note: "六十进位是怎么写、怎么算的。" }
    ]
  }
];
