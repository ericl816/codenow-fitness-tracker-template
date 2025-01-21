import React, { useState } from 'react';
import { 
  Dumbbell, 
  Trophy, 
  History, 
  TrendingUp, 
  Calendar,
  Award
} from 'lucide-react';

// Mock data (to be replaced with Supabase later)
const mockWorkouts = [
  { id: 1, date: '2024-03-10', type: 'Strength', duration: '45 min', exercises: ['Squats', 'Deadlifts', 'Bench Press'] },
  { id: 2, date: '2024-03-08', type: 'Cardio', duration: '30 min', exercises: ['Running', 'Jump Rope'] },
  { id: 3, date: '2024-03-06', type: 'HIIT', duration: '25 min', exercises: ['Burpees', 'Mountain Climbers'] },
];

const mockPRs = [
  { exercise: 'Deadlift', weight: '315 lbs', date: '2024-03-01' },
  { exercise: 'Bench Press', weight: '225 lbs', date: '2024-02-28' },
  { exercise: 'Squat', weight: '275 lbs', date: '2024-03-05' },
];

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8" />
            <h1 className="text-2xl font-bold">FitTrack Pro</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-5 w-5 text-indigo-600" />
              <h2 className="text-lg font-semibold">Quick Stats</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Workouts This Week</span>
                <span className="font-semibold">5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Time</span>
                <span className="font-semibold">4h 30m</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Current Streak</span>
                <span className="font-semibold">3 days</span>
              </div>
            </div>
          </div>

          {/* Personal Records */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Trophy className="h-5 w-5 text-indigo-600" />
              <h2 className="text-lg font-semibold">Personal Records</h2>
            </div>
            <div className="space-y-4">
              {mockPRs.map((pr, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{pr.exercise}</p>
                    <p className="text-sm text-gray-500">{pr.date}</p>
                  </div>
                  <span className="font-semibold text-indigo-600">{pr.weight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="h-5 w-5 text-indigo-600" />
              <h2 className="text-lg font-semibold">Monthly Progress</h2>
            </div>
            <div className="h-48 flex items-center justify-center">
              <p className="text-gray-500">Chart will be added with data integration</p>
            </div>
          </div>
        </div>

        {/* Recent Workouts */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-6">
            <History className="h-5 w-5 text-indigo-600" />
            <h2 className="text-lg font-semibold">Recent Workouts</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Duration</th>
                  <th className="text-left py-3 px-4">Exercises</th>
                </tr>
              </thead>
              <tbody>
                {mockWorkouts.map((workout) => (
                  <tr key={workout.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">{workout.date}</td>
                    <td className="py-3 px-4">{workout.type}</td>
                    <td className="py-3 px-4">{workout.duration}</td>
                    <td className="py-3 px-4">{workout.exercises.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;