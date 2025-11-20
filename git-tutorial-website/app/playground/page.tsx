import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Git Playground',
  description: 'Practice Git commands in an interactive browser-based environment',
}

export default function PlaygroundPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Git 练习场</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        在浏览器中直接练习 Git 命令，无需安装
      </p>

      <div className="card">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">💻</div>
          <h2 className="text-2xl font-bold mb-4">即将推出</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            交互式 Git 命令模拟器正在开发中...
          </p>
          <div className="space-y-4 max-w-md mx-auto text-left">
            <div className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <span>虚拟终端界面</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <span>支持基本 Git 命令</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <span>可视化提交历史</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <span>预设练习场景</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
