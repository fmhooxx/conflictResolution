"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { ScrollProgressBar } from "./components/scroll-progress-bar"
import { TableOfContents } from "./components/table-of-contents"
import { cn } from "@/lib/utils"
import { getImagePath } from "@/lib/image-path"
import {
  AlertTriangle,
  BookOpen,
  Brain,
  BrainCircuit,
  CheckCircle,
  ClipboardCheck,
  Ear,
  GitCompareArrows,
  Goal,
  Handshake,
  HeartHandshake,
  Hourglass,
  Lightbulb,
  ListChecks,
  Mic,
  Rabbit,
  Rocket,
  Scale,
  Shield,
  MapIcon as Sitemap,
  Target,
  ThumbsUp,
  UserCheck,
  Users,
  Zap,
  MessageSquare,
  Award,
  Drama,
  FileText,
  Users2,
  Puzzle,
  Shuffle,
  Eye,
  Sparkles,
  Anchor,
} from "lucide-react"

export default function ConflictResolutionPage() {
  const [isTocExpanded, setIsTocExpanded] = useState(true)
  const toggleToc = () => setIsTocExpanded(!isTocExpanded)

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <ScrollProgressBar />
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <header className="text-center mb-16">
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            冲突管理与化解：化危为机
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            掌握将冲突转化为合作与成长机会的智慧与技巧，不再害怕冲突，而是能够冷静沟通，巧妙化解。
          </p>
        </header>

        <div className="flex flex-row gap-x-8">
          <aside
            className={cn(
              "hidden xl:block flex-shrink-0 transition-all duration-300 ease-in-out",
              "sticky top-24 self-start max-h-[calc(100vh-6rem)]",
              isTocExpanded ? "xl:w-[280px]" : "xl:w-20",
            )}
          >
            <TableOfContents isExpanded={isTocExpanded} onToggle={toggleToc} />
          </aside>
          <main className="w-full min-w-0 space-y-20 flex-grow">
            {/* Section: Introduction */}
            <section id="intro">
              <h2 className="flex items-center text-3xl font-bold text-gray-900 mb-6">
                <BookOpen className="w-8 h-8 mr-3 text-indigo-600" />
                开篇：重新认识“冲突”——是“危”也是“机”
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                在日常工作和生活中，意见不合、观点碰撞的时刻屡见不鲜。这些或大或小的分歧、摩擦，乃至争论，都是“冲突”以不同面貌呈现在我们面前。冲突，作为组织和管理活动中普遍存在的现象，如同空气一般弥漫于职场之中。传统观念往往将冲突视为负面因素，与不安、紧张、不和、混乱甚至分裂瓦解等同起来，认为它会破坏团队的和谐与稳定，造成不必要的矛盾和误会。因此，许多人一听到“冲突”二字，便本能地感到困扰，甚至试图回避。
              </p>
              <p className="text-lg text-gray-600 mb-8">
                然而，本次研讨旨在引导大家从一个全新的视角审视冲突。冲突并非全然是洪水猛兽，它实际上是一柄双刃剑，既潜藏“危机”，也可能带来“机遇”。本次的主题——“冲突管理与化解：化危为机”，正是要探讨如何驾驭这柄双刃剑，将冲突的潜在破坏力转化为推动个人与团队成长的积极力量。
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-red-200 border-2 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-600">
                      <AlertTriangle className="w-7 h-7 mr-2" />
                      “危”：冲突的潜在破坏性
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700 space-y-2">
                    <p>
                      我们必须正视，若未能妥善处理，冲突确实会带来显著的负面影响。它可能如同一颗投入平静湖面的石子，激起层层涟漪，首先冲击的便是团队的和谐氛围与稳定状态。
                    </p>
                    <p>
                      当冲突升级，个体的精力会被无谓地消耗，工作效率自然大打折扣，甚至可能导致组织陷入混乱。更为严重的是，失控的冲突会加剧人际间的隔阂与矛盾，在员工中形成消极的工作环境，使团队成员感到沮丧和不满。
                    </p>
                    <p>
                      例如，一个项目团队若因核心方案争执不休，迟迟无法达成共识，不仅可能导致项目延期，成员间也可能因此产生嫌隙，互相指责，这便是冲突所带来的“危机”的典型体现。
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-200 border-2 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-600">
                      <Lightbulb className="w-7 h-7 mr-2" />
                      “机”：冲突的积极作用与转化潜力
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700 space-y-2">
                    <p>
                      尽管冲突具有潜在的破坏性，但如果换一个角度，并辅以恰当的管理，它也能展现出积极的一面，甚至成为组织发展的“催化剂”。管理学领域对冲突的研究早已揭示，适度的、得到有效管理的冲突，能为组织带来多方面的益处。
                    </p>
                    <p>
                      首先，建设性的冲突能够帮助组织或团队内部及时发现并暴露存在的问题，防止小瑕疵演变成大隐患。它像一面镜子，照出日常运作中可能被忽视的薄弱环节。
                    </p>
                    <p>
                      其次，不同观点、想法和意见的碰撞，往往能激发个体的活力与创造力，促使团队成员对自身弱点进行检讨，从而提高决策的质量和组织的效率。
                    </p>
                    <p>
                      此外，冲突的过程本身也可以被视为一种特殊的沟通形式。它迫使各方更清晰地表达自己的立场，同时也更深入地去理解他人的观点和潜在需求。这种深层次的互动，若引导得当，反而能增进理解，巩固关系。
                    </p>
                  </CardContent>
                </Card>
              </div>
              <blockquote className="mt-12 border-l-4 border-indigo-600 bg-indigo-50 p-6 italic text-gray-700 shadow-md rounded-r-lg">
                <Sparkles className="w-6 h-6 text-indigo-600 inline-block mr-2 mb-1" />
                <strong>点明“化危为机”核心：</strong>
                本次研讨的核心目标，正是要帮助大家掌握“化危为机”的要义。这并非一种被动的期待，期望冲突自然而然地向好的方向转化。恰恰相反，“化危为机”是一种主动的、有意识的干预过程。它要求我们首先具备识别不同类型冲突的能力，深入理解冲突产生的根源和动态，然后运用一系列有效的策略、沟通技巧和解决模型，有意识地引导冲突的走向，将其潜在的破坏性能量，巧妙地转化为促进个人能力提升、团队协作优化乃至组织创新发展的积极力量。这需要学习，更需要实践。
              </blockquote>
            </section>
            {/* Section 1: Understanding Conflict */}
            <section id="types">
              <h2 className="flex items-center text-3xl font-bold text-gray-900 mb-8">
                <BrainCircuit className="w-10 h-10 mr-4 text-indigo-600" />
                第一部分：洞察职场冲突的“真面目”
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                要有效地管理和化解冲突，首先需要准确地识别和理解它。如同医生诊病，必先明确病症，方能对症下药。职场冲突，简而言之，是指在工作环境中，个体、群体或组织之间，由于在价值观、目标、认知、处事方式等方面存在差异或分歧，从而引发的行为上或心理上的对立、矛盾状态，乃至一定程度的互动，如争论甚至对抗。
              </p>
              <p className="text-lg text-gray-600 mb-10">
                职场中的“意见打架”也并非千篇一律，它们可以根据其核心内容和表现形式划分为不同类型。了解这些类型，有助于我们更精准地把握冲突的本质，从而采取更具针对性的应对策略。
              </p>
              <div className="space-y-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <ClipboardCheck className="w-6 h-6 mr-3 text-blue-600" />
                      任务冲突 (Task Conflict)
                    </CardTitle>
                    <CardDescription>
                      关于“做什么”和“怎么做最好”的意见不合，针对工作内容、目标、方案等。
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      <strong>定义与表现：</strong>{" "}
                      任务冲突主要围绕工作内容本身展开，表现为团队成员对任务的目标、执行方案、观点、想法或意见存在分歧。比如，在项目策划会上，成员们对于“本次市场调研的核心目标应该是什么？”或者“我们应该采用A方案还是B方案来完成这个项目？”等问题产生激烈讨论。
                    </p>
                    <p>
                      <strong>潜在影响：</strong>{" "}
                      适度的任务冲突，如果能够引导各方聚焦于事实和逻辑进行探讨，往往能够激发更深入的思考，促进信息的充分交流，最终可能产生更高质量的决策和更优的解决方案。
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Users className="w-6 h-6 mr-3 text-red-600" />
                      关系冲突 (Relationship Conflict) / 人际误解引发的冲突
                    </CardTitle>
                    <CardDescription>
                      人与人之间的“不对付”，因性格、好恶、沟通方式、情感伤害等导致的人际矛盾。
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      <strong>定义与表现：</strong>{" "}
                      关系冲突源于人际互动层面，指团队成员间因个性不合、缺乏好感、价值观差异，或在沟通过程中感到不被尊重、被误解、甚至受到冒犯而产生的情感对立和人际不和。例如，某员工抱怨“小李说话总是带刺，让人很不舒服”，或者“王经理似乎总是针对我，我感觉受到了不公平对待”。
                    </p>
                    <p>
                      <strong>生活化案例：</strong>{" "}
                      小李发了一条短信给同事小王，请他“尽快”提交报告。而小王理解的“尽快”是明天之前交即可，于是并未在当天完成。小李认为小王怠慢，心生不满，小王则觉得小李要求过于苛刻。沟通上的误解让两人产生怨气，进而发生争执。这就是典型的人际误解冲突——双方本意并非恶意，却因为信息传递不清或误读对方意思而起冲突。
                    </p>
                    <p>
                      <strong>潜在影响：</strong>{" "}
                      关系冲突通常对团队氛围和成员情感的伤害最大，容易引发负面情绪，降低团队凝聚力，阻碍有效沟通，是最需要谨慎处理的冲突类型。
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Sitemap className="w-6 h-6 mr-3 text-yellow-600" />
                      流程冲突 (Process Conflict)
                    </CardTitle>
                    <CardDescription>
                      关于“工作怎么推进”、“谁负责哪块”的争议，涉及工作步骤、职责分工、资源分配等执行层面。
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      <strong>定义与表现：</strong>{" "}
                      流程冲突关乎“工作如何完成”，具体指团队成员对于完成某项任务或达成某个目标所应遵循的程序、方法、步骤、职责分配、资源调配等具体执行方式上的不一致或争议。例如，团队成员可能对“这个项目的审批流程是否过于繁琐？”、“新任务应该由哪个部门主导？”或“项目资源的分配是否合理？”等问题产生分歧。一个常见的例子是，团队成员对一项工作的分工有不同意见，或者对项目进度的管理方式持不同看法。
                    </p>
                    <p>
                      <strong>潜在影响：</strong>{" "}
                      流程冲突若得不到解决，会导致工作效率低下、责任不清、资源浪费，甚至可能因为执行层面的混乱而引发更深层次的任务冲突或关系冲突。
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <UserCheck className="w-6 h-6 mr-3 text-green-600" />
                      角色冲突 (Role Conflict)
                    </CardTitle>
                    <CardDescription>
                      个体在组织中的“位置感”混乱，因角色定位不清、期望不一或角色转变引发的困扰。
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      <strong>定义与表现：</strong>{" "}
                      角色冲突通常由于个体在组织中所扮演的角色定位不清、角色期望不一致，或者在角色发生转变（如晋升、调岗）时未能及时适应而引发的困惑、矛盾或争议。例如，一位新晋升的团队领导，其过去的平级同事现在成为了下属，双方都可能在新的权力关系和沟通方式上感到不适。或者，当一名员工需要同时向两位要求各异的领导汇报工作时，也容易陷入角色冲突的困境。
                    </p>
                    <p>
                      <strong>生活化案例：</strong>{" "}
                      公司新项目中，小张和小赵都认为自己是项目负责人，双方在决策上互不相让，导致合作受阻。又或者，上级同时交给两位员工同一项任务，双方都以为对方会完成，结果事情没人做，事后彼此埋怨对方不负责。这些都是角色认知不清引起的冲突。职责重叠或模糊让人无所适从，进而引发矛盾。
                    </p>
                    <p>
                      <strong>潜在影响：</strong>{" "}
                      角色冲突会导致个体工作压力增大、满意度下降，同时也可能影响团队内部的协作效率和指令传达的清晰度。
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Award className="w-6 h-6 mr-3 text-orange-600" />
                      资源分配冲突 (Resource Allocation Conflict)
                    </CardTitle>
                    <CardDescription>资源有限而需求无限时，就可能产生资源分配方面的冲突。</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      <strong>定义与表现：</strong>{" "}
                      当多个个体或团队对有限的资源（如预算、设备、人力、时间等）有竞争性需求时，便会产生此类冲突。例如，两个项目团队都需要公司的顶尖设计师参与，各自觉得自己的项目更重要，不愿让步，于是为争夺这位设计师的时间闹得不愉快。再比如，在家庭中两个孩子抢玩同一件玩具，或者部门间争夺预算和人手，都属于资源分配不均引发的冲突。
                    </p>
                    <p>
                      <strong>潜在影响：</strong>{" "}
                      利益和资源的竞争往往最直接地导致冲突。若处理不当，可能导致不公平感、士气低落、项目延误，甚至部门间的壁垒。
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Target className="w-6 h-6 mr-3 text-purple-600" />
                      目标/价值观冲突 (Goal/Value Conflict)
                    </CardTitle>
                    <CardDescription>
                      大家“想要的东西不一样”或“认为重要的东西不一样”，源于目标、信念、原则的根本差异。
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      <strong>定义与表现：</strong>{" "}
                      这种类型的冲突发生在个体或群体所追求的目标不一致，或者所持有的核心价值观、信念、原则存在根本性差异之时。例如，公司的研发部门可能高度重视产品的技术创新和长期价值，而销售部门则可能更关注短期业绩和市场份额的快速提升，这种目标上的差异就可能引发冲突。又如，在企业面临财务危机时，管理层可能不得不采取裁员等措施以确保公司生存，这与保障员工满意度和福祉的价值观就可能产生尖锐对立。
                    </p>
                    <p>
                      <strong>潜在影响：</strong>{" "}
                      目标或价值观冲突往往触及问题的核心，解决起来更具挑战性，需要更高层次的协调和妥协，甚至可能需要重新审视和调整组织或团队的整体战略方向。
                    </p>
                  </CardContent>
                </Card>
              </div>

              <blockquote className="mt-12 border-l-4 border-indigo-600 bg-indigo-50 p-6 italic text-gray-700 shadow-md rounded-r-lg">
                <Eye className="w-6 h-6 text-indigo-600 inline-block mr-2 mb-1" />
                <strong>理解冲突类型的价值：</strong>
                在现实工作中，不同类型的冲突往往交织在一起，一种冲突处理不当，极易引发或加剧另一种冲突。例如，一个关于项目方案的“任务冲突”，如果讨论过程中出现人身攻击或不尊重对方的言行，就很容易演变成棘手的“关系冲突”。准确识别冲突的主要类型，就像为复杂的问题找到了正确的“诊断标签”。这有助于我们理解冲突的本质，预测其可能的演化路径，并选择更具针对性的应对策略。
              </blockquote>
            </section>
            {/* Section 2: TKI Model */}
            <section id="tki-model">
              <h2 className="flex items-center text-3xl font-bold text-gray-900 mb-6">
                <GitCompareArrows className="w-10 h-10 mr-4 text-indigo-600" />
                第二部分：托马斯-基尔曼冲突模型
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                在面对冲突时，不同的人可能采取截然不同的处理方式。有的人强硬争胜，有的人选择回避退让，也有人喜欢找折中办法，等等。美国学者托马斯（Thomas）和基尔曼（Kilmann）提出的冲突处理模型将应对冲突的方式分为五种主要风格。
              </p>
              <Card className="mb-8 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Puzzle className="w-6 h-6 mr-3 text-indigo-500" />
                    冲突处理的两个维度
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">冲突风格可用两个维度来衡量：</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 pl-4">
                    <li>
                      <strong>纵轴 - 强硬性 (Assertiveness)：</strong>{" "}
                      指个体在多大程度上试图满足自身的需求、利益和关切（自我诉求的强硬程度）。强硬性高的人会积极维护自己的立场，争取自己想要的结果。
                    </li>
                    <li>
                      <strong>横轴 - 合作性 (Cooperativeness)：</strong>{" "}
                      指个体在多大程度上试图满足他人的需求、利益和关切（对他人的合作程度）。合作性高的人会更关注对方的感受和结果，愿意为此做出努力。
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    由这两个维度组合，就产生了五种风格：竞争型（强硬但不合作）、顺应型（合作但不坚持自我）、回避型（既不强硬也不合作）、合作型（强硬且合作，寻求双赢）、以及居中的妥协型。
                  </p>
                  <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                    <Image
                      src={getImagePath("/images/tki-model-chart.png")}
                      alt="托马斯-基尔曼冲突模型示意图。纵轴为强硬性，横轴为合作性。图中包含五种冲突处理风格：竞争、合作、妥协、回避和迁就。"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold text-gray-800 mb-6 mt-10 flex items-center">
                <Users2 className="w-7 h-7 mr-3 text-indigo-500" />
                五种冲突处理风格详解：小明与小红的组长之争
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                下面通过一个小故事来形象说明每种风格的特点：在学校做小组作业，小明和小红因为谁来当组长闹矛盾。小明觉得自己组织能力强，应该他当；小红觉得自己更细心，也想当组长。两人为这事争执不下。看看他们各自可能采取的处理风格：
              </p>

              <div className="space-y-8">
                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Shield className="w-6 h-6 mr-3 text-red-600" />
                      竞争型 (Competing) – “我赢你输”
                    </CardTitle>
                    <CardDescription>
                      也称强硬或强制。指一方坚持满足自己的立场，牺牲他人利益。“我一定要赢，你输不输无所谓”。
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      <strong>故事演绎：</strong>
                      小明强硬坚持自己当组长，不顾小红感受，甚至可能提高音量。最终他或许得到了头衔，但小红感到被排斥，积极性下降，团队氛围受损。
                    </p>
                    <p>
                      <strong>风格解读：</strong>
                      这种风格的人信奉“胜者为王”，比如有的人吵架一定据理力争，寸步不让，非得争个高下。这有点像拔河比赛，一方拽过来就意味着另一方被拉过去。竞争型的优点是在需要快速决策或原则性问题上，能坚定立场、不含糊。例如遇到危机必须拍板时，强硬领导可以迅速定方案执行，不拖泥带水。但缺点也明显：对人际关系的伤害大。长期采用“你死我活”的方式，会让对方不满、关系紧张，团队氛围变差。用竞争方式处理冲突，很容易一方赢了表面，双方输了感情。
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <HeartHandshake className="w-6 h-6 mr-3 text-blue-600" />
                      顺应型 (Accommodating) / 迁就型
                    </CardTitle>
                    <CardDescription>也叫迁就或忍让。指牺牲自己的利益去满足对方。</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      <strong>故事演绎：</strong>
                      小红压抑自己的想法，退让说“好吧，你当组长”。冲突表面消失，可她心里不平衡，后续投入减少。短期看似和气，长远却埋下隐患。
                    </p>
                    <p>
                      <strong>风格解读：</strong>
                      比如两人分蛋糕，你让出自己那份，全给对方，自己不吃。顺应型的人常常说“没关系，你说了算”，哪怕心里不情愿也同意。他们重视和谐，宁可委屈自己（所谓“委曲求全”）来换取关系和平。优点是矛盾立刻消失，关系表面上和好了；但缺点是自己需求一直得不到满足，时间长了心里憋屈，可能累积怨气。而且一味让步有时会助长对方的强势，自己想法永远无法被重视。
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Rabbit className="w-6 h-6 mr-3 text-gray-600" />
                      回避型 (Avoiding) – “不碰冲突”
                    </CardTitle>
                    <CardDescription>躲开冲突。既不坚持自己的，也不满足他人的要求。</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      <strong>故事演绎：</strong>
                      为了避免争执，两人默契地不再提组长之事，各自埋头做任务。缺少统一协调，工作重复或遗漏，最终作业质量很差。
                    </p>
                    <p>
                      <strong>风格解读：</strong>
                      就像鸵鸟遇险把头埋进沙子，或者干脆装作没看见。例如你和同学闹矛盾，你选择不回应、不理睬，企图拖时间让问题自动消失。优点是暂时和平，缺点是问题可能根本没解决——矛盾埋在地下，以后还会冒出来。当然，有时小冲突可以先冷处理一下，给双方冷静时间，这就是俗话说的“退一步海阔天空”。但长远看，如果重要问题总回避，反而可能积累成更大的矛盾。
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Scale className="w-6 h-6 mr-3 text-yellow-600" />
                      妥协型 (Compromising) – “各退一步”
                    </CardTitle>
                    <CardDescription>双方各让出一部分要求，找一个中间点。</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      <strong>故事演绎：</strong>
                      他们决定轮流担任：前半程由小明主导，后半程交给小红。虽然听起来公平，但缺乏统一方向，沟通成本高，仍易发生摩擦。
                    </p>
                    <p>
                      <strong>风格解读：</strong>
                      这是很常见的解决办法，比如两个人想看不同的电影，最后决定各看一部的一半，或者一个选电影另一个选晚餐地点，谁也不完全赢，但也都有所获。妥协的好处是效率高，快速结束争端，大家都有所得；但坏处是各自只能部分满意。妥协往往意味着谁也没得到最初想要的全部，结果可能不理想（俗话说“折中往往两头不讨好”）。不过在时间紧迫或分歧不大的情况下，妥协是可以接受的快捷方案。
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Handshake className="w-6 h-6 mr-3 text-green-600" />
                      合作型 (Collaborating) – “共赢双赢”
                    </CardTitle>
                    <CardDescription>也叫问题解决型。指双方积极沟通，寻找能让彼此都满意的“双赢”方案。</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      <strong>故事演绎：</strong>
                      两人坐下来坦诚交流。发现小明擅长对外沟通，小红擅长统筹细节，于是重新分工：小明负责对外汇报，小红负责内部分工。优势互补，动力十足，作业完成得更好。
                    </p>
                    <p>
                      <strong>风格解读：</strong>
                      合作型特点是双方都勇于表达自己的需求，同时也愿意倾听对方的需求，然后想办法满足双方的关键利益点。比如前面两个看电影的人，合作思维下可能发现第三种选择：先去爬山再一起看电影，既满足运动又看了影片，大家都开心。合作型被认为是最理想的冲突处理模式，因为结局是双赢、关系也改善。不过它也需要投入更多时间精力沟通，双方要信任、愿意合作才行。在某些紧急情况下，未必总有条件深入沟通。所以合作并非每次都能用，但应尽量争取。
                    </p>
                  </CardContent>
                </Card>
              </div>
              <blockquote className="mt-12 border-l-4 border-indigo-600 bg-indigo-50 p-6 italic text-gray-700 shadow-md rounded-r-lg">
                <Shuffle className="w-6 h-6 text-indigo-600 inline-block mr-2 mb-1" />
                <strong>重点：没有绝对的好坏，关键在于灵活运用。</strong>
                以上故事展现了五种冲突处理模式。需要强调的是，没有哪种风格绝对好或坏——不同情境下适用的方式可能不同。例如，当危险紧急需要立刻决策时，竞争或许有效；当问题不大且关系宝贵时，顺应未尝不可；而在重大长期利益上，合作型无疑是最理想的选择。关键是灵活运用：既要认识自己的惯用风格，也要学习其它方式，以便在不同场合采用最恰当的冲突处理策略。正如托马斯-基尔曼冲突模型所强调的：没有哪种方式永远最好，关键要视情况选择。只是能双赢时，我们就不要只想着自己赢。
              </blockquote>
            </section>
            {/* Section 3: Skills & Strategies */}
            <section id="skills">
              <h2 className="flex items-center text-3xl font-bold text-gray-900 mb-8">
                <Goal className="w-10 h-10 mr-4 text-indigo-600" />
                第三部分：“化危为机”的核心技能与策略
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                掌握了冲突的类型和个人的应对风格之后，我们便需要装备一系列核心技能与策略，它们是实现“化危为机”的“兵器”与“战术”。
              </p>
              <div className="space-y-12">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Brain className="w-7 h-7 mr-3 text-indigo-500" />
                      1. 心态转换：从“问题”到“机遇”
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-gray-700">
                    <p>
                      实现“化危为机”的征途，始于心态的根本转变。如同调整一台收音机的频率，我们需要将自己对冲突的认知从“麻烦制造者”调频至“机遇发现者”。当我们将冲突不再仅仅视为障碍、威胁或避之不及的负能量，而是看作一个暴露深层问题、激发创新思维、促进相互理解、甚至强化团队纽带的契机时，我们就已经为积极成果的产生奠定了坚实的心理基础。
                    </p>
                    <p>
                      这种心态的转变并非易事，它要求我们有意识地挑战那些关于冲突的消极刻板印象。一个“健康”的、被妥善管理的冲突，其积极意义体现在多个层面：
                    </p>
                    <ul className="list-disc list-inside pl-4 space-y-2">
                      <li>
                        <strong>发现真问题，防微杜渐：</strong>{" "}
                        建设性的冲突能够将潜藏的问题推向台面，促使团队正视并及时采取纠正措施，避免小患酿成大灾。它像一次及时的“组织体检”。
                      </li>
                      <li>
                        <strong>激发新思路，提升决策：</strong>{" "}
                        不同视角的讨论甚至是争论，能激发出意想不到的创新火花。建设性冲突鼓励批判性思维，有助于打破思维定势，提升决策质量。
                      </li>
                      <li>
                        <strong>促进真理解，深化认知：</strong>{" "}
                        冲突的沟通过程迫使各方更清晰地表达，更仔细地倾听，客观上促进了信息的充分交换和相互认知的深化。
                      </li>
                      <li>
                        <strong>增强凝聚力，巩固关系：</strong>{" "}
                        一个团队共同经历并成功化解一次具有挑战性的冲突，本身就能增强成员间的信任感、理解度和归属感。
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <MessageSquare className="w-7 h-7 mr-3 text-indigo-500" />
                      2. 沟通的艺术：化解冲突的“金钥匙”
                    </CardTitle>
                    <CardDescription>
                      如果说心态转换是“化危为机”的内功心法，那么精湛的沟通技巧就是外显的招式。在冲突管理中，沟通的质量直接决定了冲突的走向。
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 text-gray-700">
                    <div>
                      <h4 className="font-semibold text-lg flex items-center mb-2">
                        <Ear className="inline w-5 h-5 mr-2 text-green-500" />
                        积极倾听：“听懂”比“说服”更重要
                      </h4>
                      <p className="mb-2">
                        在冲突情境下，人们往往急于表达自己的观点，却常常忽略了有效沟通的基石——倾听。积极倾听并非简单地“用耳朵听”，而是全神贯注地去理解对方所传递的完整信息，包括言语内容、情感色彩以及未明说的潜在含义。
                      </p>
                      <ul className="list-decimal list-inside pl-4 space-y-1">
                        <li>
                          <strong>不打断，耐心听完：</strong>给予对方充足的时间和空间来完整表达。
                        </li>
                        <li>
                          <strong>总结复述，确认理解：</strong>
                          用自己的话总结并复述其核心内容，并向对方确认：“如果我理解正确的话，您的主要意思是……，对吗？”
                        </li>
                        <li>
                          <strong>关注并回应感受：</strong>
                          留意对方言语和非言语中流露出的情感信号，并适时地给予回应：“听起来您对这个结果感到非常失望。”先处理好情绪，再处理具体事务。
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg flex items-center mb-2">
                        <Hourglass className="inline w-5 h-5 mr-2 text-yellow-500" />
                        控制情绪：做情绪的主人，而非奴隶
                      </h4>
                      <p className="mb-2">
                        冲突是情绪的催化剂。一旦被负面情绪所裹挟，理性思考能力便会大打折扣。在冲突中保持情绪稳定是有效管理的前提。
                      </p>
                      <ul className="list-decimal list-inside pl-4 space-y-1">
                        <li>
                          <strong>深呼吸，给自己缓冲：</strong>感觉到情绪激动时，有意识地进行几次深呼吸。
                        </li>
                        <li>
                          <strong>适时暂停：</strong>如果讨论变得过于激烈，主动提议暂时休会：“不如先各自冷静10分钟？”
                        </li>
                        <li>
                          <strong>聚焦事实与问题，而非情绪宣泄：</strong>
                          时刻提醒自己和对方，目标是共同解决问题，而不是相互指责。
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg flex items-center mb-2">
                        <ThumbsUp className="inline w-5 h-5 mr-2 text-blue-500" />
                        关注行为而非个人：“你这次报告迟交了” vs “你总是拖拖拉拉”
                      </h4>
                      <p>
                        一个核心原则是：对事不对人。将对具体“事”的不满泛化为对“人”的否定，会极大地伤害对方自尊，激化矛盾。
                      </p>
                      <p>
                        <strong>错误示范：</strong> “你怎么总是这么不负责任！”（这是对个人品格的攻击）
                      </p>
                      <p>
                        <strong>正确示范：</strong>{" "}
                        “这份项目报告原定于周三上午提交，但现在已经是周五下午了，我还没有收到。这导致我们团队无法按计划进行下一步的工作，可能会影响整个项目的进度。”（清晰描述具体行为及其客观影响）
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg flex items-center mb-2">
                        <Zap className="inline w-5 h-5 mr-2 text-purple-500" />
                        区分立场与需求：他为什么坚持？他真正想要什么？
                      </h4>
                      <p className="mb-2">
                        人们通常会清晰地表达自己的“立场”（Position），即他们公开宣称自己想要什么。然而，隐藏在表面立场之下的是更深层次的“需求”或“利益”（Interests/Needs）。
                      </p>
                      <p className="mb-2">
                        <strong>冰山理论：</strong>
                        立场如同浮在水面上的冰山一角，需求则是水面下更为庞大和隐蔽的主体。如果仅仅围绕立场争论，很容易陷入僵局。但如果能够深入挖掘并理解彼此的真实需求，就可能找到满足双方需求的创新解决方案。
                      </p>
                      <p>
                        <strong>经典的“分橙子”故事：</strong>
                        姐妹两人都想要桌上唯一的一个橙子（立场）。如果按照立场来分，最公平的结果可能是一人一半。但如果母亲进一步询问她们为什么想要橙子（探寻需求），可能会发现姐姐想要橙肉来榨汁，而妹妹则需要橙皮来烤蛋糕。如此一来，只需将橙子皮给妹妹，橙子肉给姐姐，一个橙子便能完美地满足两个人的不同需求，实现了双赢。
                      </p>
                      <p>
                        <strong>提问技巧：</strong>
                        多问几个“为什么选择这个方案？”、“您主要担心的是什么问题？”、“如果……情况会怎样，您能接受吗？”
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg flex items-center mb-2">
                        <Mic className="inline w-5 h-5 mr-2 text-teal-500" />
                        运用PREP模型清晰表达：结论先行，理由支撑，案例佐证，重申观点
                      </h4>
                      <p className="mb-2">PREP模型提供了一个简单实用的四步结构，帮助我们构建有力的论述：</p>
                      <ol className="list-decimal list-inside pl-4 space-y-1">
                        <li>
                          <strong>P (Point - 核心观点/结论)：</strong> 开门见山，首先亮出你的主要看法或建议。
                        </li>
                        <li>
                          <strong>R (Reason - 理由/依据)：</strong> 接着解释你为什么持有这个观点，给出支持性的理由。
                        </li>
                        <li>
                          <strong>E (Example - 案例/证据)：</strong>{" "}
                          提供具体的案例、数据、事实或个人经验来佐证你的理由。
                        </li>
                        <li>
                          <strong>P (Point - 重申观点/呼吁行动)：</strong>{" "}
                          最后，再次强调你的核心观点，或者提出具体的行动建议。
                        </li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <ListChecks className="w-7 h-7 mr-3 text-indigo-500" />
                      3. 解决冲突的实用步骤
                    </CardTitle>
                    <CardDescription>
                      掌握了沟通心法之后，还需要一套结构清晰的“组合拳”来系统地应对和解决冲突。
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-gray-700">
                    <div className="p-4 border rounded-md bg-gray-50">
                      <h4 className="font-semibold text-lg mb-1">
                        1. 冷静面对，澄清问题 (Face it Calmly, Clarify the Problem)
                      </h4>
                      <p>
                        <strong>核心行动：</strong>
                        当冲突发生或被感知到时，首要任务是控制自身情绪，避免立即做出冲动反应。努力保持客观和冷静的态度。然后，如同侦探调查案情一般，着手澄清冲突的核心议题：“我们究竟在为什么事情产生分歧？”
                        在此阶段，应不偏不倚地描述所观察到的冲突现象和相关行为，避免过早下定论或进行指责性评价。鼓励冲突各方都花一些时间，从一个相对抽离的视角来审视问题的全貌。
                      </p>
                    </div>
                    <div className="p-4 border rounded-md bg-gray-50">
                      <h4 className="font-semibold text-lg mb-1">
                        2. 积极倾听，理解需求 (Listen Actively, Understand Needs)
                      </h4>
                      <p>
                        <strong>核心行动：</strong>
                        为冲突的每一方创造一个安全的环境，使其能够充分、不受干扰地表达各自的观点、感受，以及他们对冲突成因的理解。在此过程中，应积极运用前述的积极倾听技巧，如不打断、总结复述、回应感受等，以确保真正理解对方的立场、担忧、以及那些可能未被直接言明的深层需求和利益。尝试用自己的话复述对方的观点，并请求确认，是检验理解准确性的有效方法。
                      </p>
                    </div>
                    <div className="p-4 border rounded-md bg-gray-50">
                      <h4 className="font-semibold text-lg mb-1">
                        3. 共寻方案，创造共赢 (Brainstorm Solutions, Create Win-Win)
                      </h4>
                      <p>
                        <strong>核心行动：</strong>
                        在对问题有了清晰的界定、对各方需求有了深入理解的基础上，邀请所有相关方共同参与到解决方案的构思中来。可以提出这样的问题：“基于我们目前对情况的了解，大家认为可以采取哪些方法来解决这个问题，从而尽可能让各方都感到满意，或者至少都能接受？”。鼓励进行开放式的头脑风暴，尽可能多地产生备选方案，不必过早评判其可行性。努力寻找各方立场中的共同点、重叠的利益或可以共同追求的更高层次目标，以此作为构建解决方案的突破口。最终目标是找到一个能够实现“双赢”或“多赢”，让各方都感觉从解决方案中有所收获的方案。
                      </p>
                    </div>
                    <div className="p-4 border rounded-md bg-gray-50">
                      <h4 className="font-semibold text-lg mb-1">
                        4. 明确行动，跟进结果 (Define Actions, Follow Up on Results)
                      </h4>
                      <p>
                        <strong>核心行动：</strong>
                        一旦就某个或某组解决方案达成了初步共识，就需要将其具体化、可操作化。明确规定：由谁（Who）在什么时间（When）负责完成哪些具体的行动步骤（What），以及期望达到什么样的可衡量结果（How
                        well）。最好将商定的行动计划以书面形式记录下来，并分发给所有相关人员，以避免后续产生误解或遗忘。更为重要的是，解决方案的执行并非终点。需要在执行过程中及执行后进行持续的跟进和评估，审视方案的实际效果是否符合预期，冲突是否得到有效化解。如果效果不佳，或者出现了新的问题，可能需要重新回到分析阶段，对方案进行调整和优化。
                      </p>
                    </div>
                    <p className="italic text-sm mt-4">
                      这套步骤并非一成不变的僵化流程，而是一个动态的、可迭代的框架。在实际应用中，可能需要根据冲突的复杂性、参与方的特点以及情境的紧迫性等因素，灵活调整各个步骤的侧重点和执行方式。
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Anchor className="w-7 h-7 mr-3 text-indigo-500" />
                      4. 寻求双赢的智慧：如何把“蛋糕”做大？
                    </CardTitle>
                    <CardDescription>
                      超越“零和博弈”思维，通过创造性地解决问题，不是争夺现有“蛋糕”，而是设法将“蛋糕”做得更大。
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 text-gray-700">
                    <p>
                      在许多人的潜意识里，冲突往往被视为一场“零和博弈”——一方的所得即为另一方的所失。然而，真正富有智慧的冲突管理者，会努力超越这种非赢即输的二元对立思维，积极寻求“双赢”（Win-Win）的可能。双赢思维的核心在于，通过创造性的问题解决方式，不是简单地在现有“蛋糕”上争夺份额，而是设法将“蛋糕”本身做得更大，从而让每个参与方都能获得比预期更多的价值，或者至少能满足其最核心的需求。
                    </p>
                    <p>
                      实现双赢的关键在于跳出各自固守的“立场”，深入探索驱动这些立场背后的真实“需求”和共同“利益”。当焦点从“我要什么”转向“我为什么需要这个”以及“我们共同的目标是什么”时，往往能开辟出全新的合作空间。
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="bg-blue-50">
                        <CardHeader>
                          <CardTitle className="text-lg">案例1：南通通州噪声扰民投诉的化解</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-1">
                          <p>
                            <strong>背景：</strong>居民投诉洗车行噪声扰民。洗车行规模小，难承担大规模改造。
                          </p>
                          <p>
                            <strong>“危”：</strong>居民生活受扰，洗车行面临处罚，执法部门压力大。
                          </p>
                          <p>
                            <strong>“机”的探索：</strong>执法人员深入了解双方需求（居民要安静，洗车行要经营）。
                          </p>
                          <p>
                            <strong>双赢方案：</strong>
                            精准定位噪声源（高压水泵安装不当），协助调整设备安装方式，“最小干预，精准降噪”。
                          </p>
                          <p>
                            <strong>结果：</strong>噪声解决，居民满意，洗车行继续经营，执法部门成功化解矛盾。
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="bg-green-50">
                        <CardHeader>
                          <CardTitle className="text-lg">案例2：美国电力公司修建水坝的争议</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-1">
                          <p>
                            <strong>背景：</strong>电力公司要建坝，农民担心灌溉，环保人士担忧鹤类栖息地。三方对立。
                          </p>
                          <p>
                            <strong>“危”：</strong>项目停滞，各方耗费巨大，矛盾激化。
                          </p>
                          <p>
                            <strong>“机”的探索：</strong>
                            从坚持立场转向关注根本利益（电力公司要发电，农民要用水，环保人士要保护环境）。
                          </p>
                          <p>
                            <strong>双赢方案：</strong>建小型水坝，保障灌溉用水，投入资金保护并建立栖息地信托基金。
                          </p>
                          <p>
                            <strong>结果：</strong>
                            一个看似无法解决的零和冲突，通过深入挖掘和调和各方根本利益，最终转化为一个多方共赢的局面。
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <p className="italic">
                      这些案例都说明，“双赢”并非遥不可及的理想，它往往植根于对冲突各方真实需求的深刻洞察，以及超越表面立场、寻求共同价值的智慧与努力。
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
            {/* Section 4: Practice */}
            <section id="practice">
              <h2 className="flex items-center text-3xl font-bold text-gray-900 mb-6">
                <Users className="w-10 h-10 mr-4 text-indigo-600" />
                第四部分：实战演练——职场冲突情景分析
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                理论知识的学习是基础，而将其应用于实践，通过模拟和演练来巩固和深化理解，则是提升冲突管理能力的关键环节。本部分将通过典型的职场冲突情景分析，引导大家将所学知识“活学活用”。
              </p>
              <div className="space-y-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Drama className="w-7 h-7 mr-3 text-indigo-500" />
                      情景角色扮演
                    </CardTitle>
                    <CardDescription>
                      通过模拟真实冲突情景，对抗争执双方的心理和行为模式有更直观的体会，并练习沟通化解冲突的技巧。
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-lg mb-2">场景：项目进度冲突</p>
                    <p className="text-gray-700 mb-4">
                      <strong>角色A（项目经理）：</strong>性格直率，任务导向强，近期因项目进度滞后压力很大。
                      <br />
                      <strong>角色B（技术负责人）：</strong>
                      性格稳重，专业技术过硬，但最近手下新人多，花了很多时间培训新人导致任务积压。
                    </p>
                    <p className="font-semibold text-lg mb-2">对话脚本概要：</p>
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">
                      A不满地质问B为何开发模块又拖延，指责B总赶不上计划。B解释人手紧张且需求变更。A认为B借口多，不提早沟通。B抱怨新人培养耗时，不想交付带bug的产品。A打断，强调客户压力，认为B害惨了自己。B反驳是管理层决策问题，需求改动不评估技术可行性，只知压期限。A更生气，指责B态度有问题。B也激动，表示自己也很冤枉，工作量翻倍。A强硬要求下周一必须上线，否则向老板反映。B表示做不完，让A随便找谁。A威胁要换人。B拍桌表示换人就换人。两人愤怒对视，场面僵持。
                    </blockquote>
                    <p className="font-semibold text-lg mb-2">流程：</p>
                    <ol className="list-decimal list-inside text-gray-700 space-y-1 pl-4">
                      <li>将学员分成若干三人小组。每组内分别扮演冲突双方当事人（角色A和角色B），以及观察者。</li>
                      <li>
                        A和B各自阅读并熟悉自己的台词和角色背景，体会角色当下的情绪和立场。观察者同时阅读整段对话，了解冲突经过，并准备记录。
                      </li>
                      <li>
                        各组学员准备就绪后，A和B面对面开始按照脚本演绎对话。允许即兴发挥，但整体围绕给定情境。观察者仔细观察并记录。
                      </li>
                      <li>
                        对话结束后，先请观察者发言，描述观察到的情况（语言、表情、肢体语言、冲突风格、沟通优缺点）。
                      </li>
                      <li>接着请扮演A和B的学员谈谈自己的感受和心理体验。</li>
                      <li>小组内部一起讨论：对话哪里出现问题？如何改进？引导学员运用所学技巧重新思考。</li>
                      <li>（可选）如果时间允许，交换角色再演一次，或用改进方式重演。</li>
                    </ol>
                  </CardContent>
                </Card>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <FileText className="w-7 h-7 mr-3 text-indigo-500" />
                      小组讨论练习
                    </CardTitle>
                    <CardDescription>
                      通过讨论分析一个冲突案例，学会诊断冲突类型和根源，并集思广益提出解决方案，应用所学理论于实践。
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-lg mb-2">案例背景：市场部 vs 研发部的新品冲突</p>
                    <p className="text-gray-700 mb-2">
                      公司市场部和研发部在合作推出新品时发生冲突。市场部经理小陈认为研发部提交的产品原型不符合客户需求，要求大改功能；而研发部主管小王觉得市场部频繁更改需求、不切实际。双方互相抱怨，项目进展停滞。
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-red-50 p-3 rounded-md border border-red-200">
                        <p className="font-medium text-red-700">市场部经理小陈：</p>
                        <p className="text-sm text-red-600">
                          “研发老是闭门造车，客户要的东西他们不听，做出来的产品卖不出去！现在提点改进意见，还各种推脱。”
                          （强调市场一线信息重要，认为研发不尊重市场反馈）
                        </p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-md border border-blue-200">
                        <p className="font-medium text-blue-700">研发部主管小王：</p>
                        <p className="text-sm text-blue-600">
                          “市场部的人拍脑袋提方案，一会儿一个想法，我们加班做出来又说不行，完全浪费时间！技术上很多实现不了的他们根本不懂。”
                          （觉得市场部朝令夕改，缺乏技术常识，导致研发反复加班却不被认可）
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold text-gray-800 mb-2">冲突升级：</p>
                    <p className="text-gray-700 mb-4">
                      在一次跨部门会议上，小陈和小王当众争吵起来，相互指责对方不专业、不配合。会议不欢而散，两部门人员私下也开始站队，合作陷入僵局。
                    </p>

                    <p className="font-semibold text-lg mb-2">讨论任务：</p>
                    <ol className="list-decimal list-inside text-gray-700 space-y-1 pl-4">
                      <li>
                        <strong>冲突类型识别：</strong>判断本案例属于哪些主要冲突类型？给出理由。
                      </li>
                      <li>
                        <strong>冲突根源分析：</strong>深入探讨引发冲突的真正原因。从双方的需求和关注点出发思考。
                      </li>
                      <li>
                        <strong>解决方案构思：</strong>假如让你来调解此冲突，你会采取哪些措施？（短期应对与长期预防）
                      </li>
                      <li>
                        <strong>预防措施（可选）：</strong>团队或公司层面还能做些什么，从源头减少这类跨部门冲突？
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </section>
            {/* Section 5: Conclusion */}
            <section id="conclusion">
              <h2 className="flex items-center text-3xl font-bold text-gray-900 mb-6">
                <CheckCircle className="w-10 h-10 mr-4 text-indigo-600" />
                总结与行动：拥抱冲突，持续成长
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                经过以上学习和练习，我们可以看到：冲突并不可怕，可怕的是缺乏正确的认知和技巧。只要我们转变观念，掌握方法，每个人都能把冲突变成改善关系、推动进步的契机。
              </p>
              <Card className="bg-indigo-50 border-indigo-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Rocket className="w-7 h-7 mr-3 text-indigo-600" />
                    行动倡议与日常实用建议
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <ul className="list-disc list-inside pl-4 space-y-2">
                    <li>
                      <strong>正视冲突，心态开放：</strong>接受“冲突是正常的”，把它当作需要解决的问题而非人身攻击。
                    </li>
                    <li>
                      <strong>用合适的语言打开局面：</strong>
                      使用缓和语气的表达，如“我明白你的想法...我的看法有点不同...”。
                    </li>
                    <li>
                      <strong>管控情绪，不激化矛盾：</strong>深呼吸，及时提议暂停，避免“你从不…你总是…”这类指责。
                    </li>
                    <li>
                      <strong>关注倾听和反馈：</strong>耐心听完，不打断，复述确认理解，表示尊重。
                    </li>
                    <li>
                      <strong>以解决问题为导向：</strong>多问“我们真正需要什么结果？”，将讨论拉回事情本身。
                    </li>
                    <li>
                      <strong>日常预防冲突：</strong>定期主动交流，澄清期望，及时私下沟通不满，认可他人表现。
                    </li>
                  </ul>
                  <p className="font-semibold mt-6">
                    为了更好地促进学习成果的转化，建议您在研讨结束后，进行一项小小的“课后实践”：
                  </p>
                  <ol className="list-decimal list-inside space-y-1 pl-4">
                    <li>
                      <strong>识别一个当前的或潜在的冲突：</strong>在您的工作中找到一个具体的冲突情境。
                    </li>
                    <li>
                      <strong>运用所学进行分析：</strong>使用今天学习的工具（如冲突类型、TKI模型）来分析它。
                    </li>
                    <li>
                      <strong>构思一个“化危为机”的行动小计划：</strong>思考您可以采取的具体沟通策略和解决步骤。
                    </li>
                  </ol>
                  <p className="mt-4 font-medium text-indigo-800">
                    记住，冲突管理能力的提升是一个持续学习和精进的过程。每一次小小的改变，都会让冲突的走向有所不同。让我们努力做到：有冲突不回避，遇矛盾能化解，化危机为转机，变对立为双赢！
                  </p>
                </CardContent>
              </Card>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
