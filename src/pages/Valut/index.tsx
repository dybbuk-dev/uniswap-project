import React from 'react'
import StakePumpkinSection from './components/stake-pumpkin-section'
export default function Valut() {
    return (
        <div className="w-full bg-gray-100 dark:bg-zinc-900" style={{minHeight:"80vh"}}>
            <div className="md:px-4 mx-auto max-w-7xl lg:px-8">
                <main className="relative flex-1 py-8">
                    <StakePumpkinSection id={0} apy={704} lockTime={"15 days"} />
                    <StakePumpkinSection id={1} apy={1890} lockTime={"30 days"} />
                    <StakePumpkinSection id={2} apy={4056} lockTime={"60 days"} />
                </main>
            </div>
        </div>
    )
}
