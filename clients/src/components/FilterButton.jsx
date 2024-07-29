import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FilterModal = ({ isModalOpen, toggleModal, handleFilterClick, handleApplyFilters, resetFilters }) => {
  const [selectedRange, setSelectedRange] = useState('all'); // Manage selected range
  const [chartData, setChartData] = useState({
    labels: ['0-20', '20-40', '40-60', '60-80', '80-100'],
    datasets: [
      {
        label: 'Price Range',
        data: [12, 19, 3, 5, 2], // Example data, replace with actual data if needed
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  const handleRangeChange = (event) => {
    const value = event.target.value;
    setSelectedRange(value);

    // Update chart data based on selected range
    // Example logic, replace with actual data fetching/filtering logic
    const updatedData = {
      labels: ['0-20', '20-40', '40-60', '60-80', '80-100'],
      datasets: [
        {
          label: 'Price Range',
          data: value === 'all' ? [12, 19, 3, 5, 2] : [/* Filtered data based on value */],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };
    setChartData(updatedData);
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Price Ranges',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  };

  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded shadow-lg w-1/3">
          <h3 className="text-xl font-bold mb-4">Filter Options</h3>

          {/* Select Dropdown */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Select Price Range</h4>
            <select
              value={selectedRange}
              onChange={handleRangeChange}
              className="p-2 border rounded w-full"
            >
              <option value="all">All Ranges</option>
              <option value="low">Low Range (0-20)</option>
              <option value="medium">Medium Range (20-60)</option>
              <option value="high">High Range (60-100)</option>
            </select>
          </div>

          {/* Price Range Chart */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Price Range Chart</h4>
            <div className="mb-4">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Region Filter */}
          <div className="flex flex-col gap-4 mb-6">
            <h4 className="text-lg font-semibold mb-2">Region</h4>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="asia"
                onChange={() => handleFilterClick("asia")}
                className="form-checkbox"
              />
              Asia
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="north-america"
                onChange={() => handleFilterClick("north-america")}
                className="form-checkbox"
              />
              North America
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="europe"
                onChange={() => handleFilterClick("europe")}
                className="form-checkbox"
              />
              Europe
            </label>
          </div>

          {/* Language Filter */}
          <div className="flex flex-col gap-4 mb-6">
            <h4 className="text-lg font-semibold mb-2">Language</h4>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="english"
                onChange={() => handleFilterClick("english")}
                className="form-checkbox"
              />
              English
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="french"
                onChange={() => handleFilterClick("french")}
                className="form-checkbox"
              />
              French
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="arabic"
                onChange={() => handleFilterClick("arabic")}
                className="form-checkbox"
              />
              Arabic
            </label>
          </div>

          {/* Apply and Close Buttons */}
          <div className="flex justify-end">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 mr-2"
              onClick={() => handleApplyFilters()}
            >
              Apply
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700 mr-2"
              onClick={resetFilters}
            >
              Reset
            </button>
            <button
              className="bg-gray-200 text-black px-4 py-2 rounded shadow hover:bg-gray-300"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default FilterModal;
