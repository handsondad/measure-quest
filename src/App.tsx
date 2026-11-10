import { useEffect, useRef, useState } from "react";
import { labById } from "./data/labs";
import { questionById, topicById, type LabId, type TopicId } from "./data/questions";
import { unitById, type BaseUnitId } from "./data/units";
import { useHeardQuestions } from "./hooks/useHeardQuestions";
import { HomePage } from "./pages/HomePage";
import { LabPage } from "./pages/LabPage";
import { QuestionListPage } from "./pages/QuestionListPage";
import { QuestionPage } from "./pages/QuestionPage";
import { SourcesPage } from "./pages/SourcesPage";
import { TimelinePage } from "./pages/TimelinePage";
import { UnitPage } from "./pages/UnitPage";
import { UnitsPage } from "./pages/UnitsPage";

type Route =
  | { page: "home" }
  | { page: "list"; topic: TopicId }
  | { page: "question"; id: string }
  | { page: "lab"; id: LabId }
  | { page: "units" }
  | { page: "unit"; id: BaseUnitId }
  | { page: "timeline" }
  | { page: "sources" };

function parseRoute(hash: string): Route {
  const [, page, rawParam] = hash.replace(/^#/, "").split("/");
  const param = rawParam ? decodeURIComponent(rawParam) : undefined;
  if (page === "topic" && param && topicById(param)) return { page: "list", topic: param as TopicId };
  if (page === "q" && param && questionById(param)) return { page: "question", id: param };
  if (page === "lab" && param && labById(param)) return { page: "lab", id: param as LabId };
  if (page === "unit" && param && unitById(param)) return { page: "unit", id: param as BaseUnitId };
  if (page === "units") return { page: "units" };
  if (page === "timeline") return { page: "timeline" };
  if (page === "sources") return { page: "sources" };
  return { page: "home" };
}

const listHash = (topic: TopicId) => `#/topic/${topic}`;

function App() {
  const { heard, markHeard } = useHeardQuestions();
  const [route, setRoute] = useState(() => parseRoute(window.location.hash));
  /** 从哪个列表进来的，返回时回到那里而不是一直跳回首页 */
  const lastList = useRef<TopicId | null>(null);

  useEffect(() => {
    const onHash = () => setRoute(parseRoute(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (route.page === "home") lastList.current = null;
    if (route.page === "list") lastList.current = route.topic;
    window.scrollTo(0, 0);
  }, [route]);

  const go = (hash: string) => { window.location.hash = hash; };
  const goHome = () => go("#/");
  const openQuestion = (id: string) => go(`#/q/${id}`);
  const openLab = (id: LabId) => go(`#/lab/${id}`);
  const openUnit = (id: BaseUnitId) => go(`#/unit/${id}`);
  const openUnits = () => go("#/units");
  const openTimeline = () => go("#/timeline");
  const openSources = () => go("#/sources");

  if (route.page === "question") {
    const question = questionById(route.id);
    if (question) {
      const back = lastList.current ?? question.topic;
      return (
        <QuestionPage key={question.id} question={question} heard={heard} onHeard={markHeard}
          onBack={() => go(listHash(back))} onOpen={openQuestion} onUnit={openUnit} />
      );
    }
  }
  if (route.page === "list") {
    return (
      <QuestionListPage key={route.topic} topic={route.topic} heard={heard}
        onBack={goHome} onOpen={openQuestion} onTopic={(id) => go(listHash(id))} onUnit={openUnit} />
    );
  }
  if (route.page === "lab") {
    return <LabPage key={route.id} id={route.id} onBack={goHome} onOpen={openQuestion} onLab={openLab} />;
  }
  if (route.page === "units") {
    return <UnitsPage onBack={goHome} onUnit={openUnit} onTimeline={openTimeline} onSources={openSources} onTopic={() => go(listHash("system"))} />;
  }
  if (route.page === "unit") {
    return <UnitPage key={route.id} id={route.id} heard={heard} onBack={openUnits} onUnit={openUnit} onOpen={openQuestion} onLab={openLab} />;
  }
  if (route.page === "timeline") return <TimelinePage heard={heard} onBack={goHome} onOpen={openQuestion} />;
  if (route.page === "sources") return <SourcesPage onBack={goHome} />;
  return (
    <HomePage heard={heard} onTopic={(id) => go(listHash(id))} onLab={openLab}
      onUnit={openUnit} onUnits={openUnits} onTimeline={openTimeline} onSources={openSources} />
  );
}

export default App;
