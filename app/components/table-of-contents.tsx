"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { PanelLeftClose, PanelRightOpen } from "lucide-react"

const sections = [
  { id: "intro", title: "开篇：重新认识“冲突”" },
  { id: "types", title: "第一部分：洞察职场冲突" },
  { id: "tki-model", title: "第二部分：托马斯-基尔曼模型" },
  { id: "skills", title: "第三部分：核心技能与策略" },
  { id: "practice", title: "第四部分：实战演练" },
  { id: "conclusion", title: "总结与行动" },
]

interface TableOfContentsProps {
  isExpanded: boolean
  onToggle: () => void
}

export function TableOfContents({ isExpanded, onToggle }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    // 初始化时设置当前可见的区域
    const initializeActiveSection = () => {
      const elements = sections.map(({ id }) => document.getElementById(id)).filter(Boolean)
      for (const element of elements) {
        const rect = element!.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(element!.id)
          break
        }
      }
      // 如果没有找到合适的，默认设置为第一个
      if (!elements.some(el => {
        const rect = el!.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })) {
        setActiveSection(sections[0].id)
      }
    }

    // 页面加载时初始化
    initializeActiveSection()

    observer.current = new IntersectionObserver(
      (entries) => {
        // 找到最靠近顶部的可见区域
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (visibleEntries.length > 0) {
          // 按照距离顶部的位置排序，选择最靠近顶部的
          const sortedEntries = visibleEntries.sort((a, b) =>
            a.boundingClientRect.top - b.boundingClientRect.top
          )
          setActiveSection(sortedEntries[0].target.id)
        }
      },
      {
        rootMargin: "-80px 0px -80% 0px",
        threshold: [0, 0.1, 0.5, 1.0]
      },
    )

    const elements = sections.map(({ id }) => document.getElementById(id)).filter(Boolean)
    elements.forEach((el) => observer.current?.observe(el!))

    // 添加滚动监听作为备用方案
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const elements = sections.map(({ id }) => document.getElementById(id)).filter(Boolean)

      // 找到当前最接近顶部的区域
      let currentSection = sections[0].id
      for (const element of elements) {
        const rect = element!.getBoundingClientRect()
        const elementTop = rect.top + scrollTop
        if (scrollTop >= elementTop - 120) {
          currentSection = element!.id
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      elements.forEach((el) => observer.current?.unobserve(el!))
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const fixedHeaderOffset = 4 + 24 // 4px for progress bar, 24px for extra padding
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - fixedHeaderOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  if (isExpanded) {
    return (
      // Removed sticky, top-24 from nav. Parent aside handles stickiness.
      // Added h-full to fill parent aside.
      <nav className="p-6 bg-slate-50 rounded-lg border border-slate-200 shadow-sm h-full flex flex-col">
        <div className="flex justify-between items-center mb-5 flex-shrink-0">
          <h3 className="text-lg font-semibold text-gray-800">本页导览</h3>
          <button
            onClick={onToggle}
            aria-label="收起目录"
            className="p-1.5 text-gray-500 hover:text-indigo-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-slate-200"
            title="收起目录"
          >
            <PanelLeftClose className="w-5 h-5" />
          </button>
        </div>
        {/* ul now handles its own scrolling within the nav */}
        <ul id="toc-list" className="space-y-2.5 overflow-y-auto flex-grow">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => handleLinkClick(e, section.id)}
                className={cn(
                  "block py-1.5 px-2.5 text-sm text-gray-600 hover:text-indigo-700 transition-all duration-150 rounded-md",
                  activeSection === section.id
                    ? "font-semibold text-indigo-600 bg-indigo-100 scale-[1.02]"
                    : "hover:bg-slate-200 hover:translate-x-1",
                )}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  } else {
    return (
      // Removed sticky, top-24. Parent aside handles stickiness.
      // h-full to ensure it takes up space if needed, pt-6 for button positioning.
      <div className="h-full flex items-start justify-center pt-6">
        <button
          onClick={onToggle}
          aria-label="展开目录"
          className="p-2.5 bg-slate-50 rounded-md border border-slate-200 shadow-sm hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          title="展开目录"
        >
          <PanelRightOpen className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    )
  }
}
