// ===================================
// MOVIE DATABASE
// ===================================
const moviesDatabase = [
    // Tamil Action Movies
    {
        title: "Vikram",
        year: 2022,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/vikram"
    },
    {
        title: "Leo",
        year: 2023,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/leo"
    },
    {
        title: "Varisu",
        year: 2023,
        quality: "PreDvd",
        category: ["Tamil"],
        image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/varisu"
    },
    {
        title: "Jailer",
        year: 2023,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1574267432644-f610a5804a31?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/jailer"
    },
    {
        title: "Master",
        year: 2021,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/master"
    },
    
    // English Action Movies
    {
        title: "John Wick 4",
        year: 2023,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1611419010196-a425a5b4e3d4?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/johnwick4"
    },
    {
        title: "Mission Impossible 7",
        year: 2023,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/mi7"
    },
    {
        title: "The Batman",
        year: 2022,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/batman"
    },
    {
        title: "Top Gun Maverick",
        year: 2022,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/topgun"
    },
    {
        title: "Avatar 2",
        year: 2022,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/avatar2"
    },
    
    // More Tamil Movies
    {
        title: "Ponniyin Selvan",
        year: 2022,
        quality: "HD",
        category: ["Tamil"],
        image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/ps1"
    },
    {
        title: "Valimai",
        year: 2022,
        quality: "PreDvd",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/valimai"
    },
    {
        title: "Beast",
        year: 2022,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1606603696914-3b6e28c57f97?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/beast"
    },
    {
        title: "Don",
        year: 2022,
        quality: "HD",
        category: ["Tamil"],
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/don"
    },
    {
        title: "Kaithi",
        year: 2019,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/kaithi"
    },
    
    // More English Movies
    {
        title: "Spider-Man No Way Home",
        year: 2021,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/spiderman"
    },
    {
        title: "Dune",
        year: 2021,
        quality: "HD",
        category: ["English"],
        image: "https://images.unsplash.com/photo-1600262300671-295cb37d1e1d?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/dune"
    },
    {
        title: "No Time To Die",
        year: 2021,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/bond"
    },
    {
        title: "The Matrix Resurrections",
        year: 2021,
        quality: "PreDvd",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1554072675-66db59dba46f?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/matrix"
    },
    {
        title: "Eternals",
        year: 2021,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/eternals"
    },
    
    // Additional Movies
    {
        title: "Sardar",
        year: 2022,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/sardar"
    },
    {
        title: "Pathaan",
        year: 2023,
        quality: "HD",
        category: ["Action"],
        image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/pathaan"
    },
    {
        title: "Black Panther 2",
        year: 2022,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1518281361980-b26bfd556770?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/blackpanther2"
    },
    {
        title: "RRR",
        year: 2022,
        quality: "HD",
        category: ["Action"],
        image: "https://images.unsplash.com/photo-1542204625-ca6c2f715f0c?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/rrr"
    },
    {
        title: "Doctor Strange 2",
        year: 2022,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/doctorstrange2"
    },
    {
        title: "Thor Love and Thunder",
        year: 2022,
        quality: "PreDvd",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/thor"
    },
    {
        title: "Bullet Train",
        year: 2022,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/bullettrain"
    },
    {
        title: "Thunivu",
        year: 2023,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/thunivu"
    },
    {
        title: "Ant-Man Quantumania",
        year: 2023,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/antman"
    },
    {
        title: "Fast X",
        year: 2023,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/fastx"
    },
    {
        title: "Guardians Galaxy 3",
        year: 2023,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/gotg3"
    },
    {
        title: "The Flash",
        year: 2023,
        quality: "PreDvd",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/flash"
    },
    {
        title: "Transformers Rise",
        year: 2023,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/transformers"
    },
    {
        title: "Cobra",
        year: 2022,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/cobra"
    },
    {
        title: "Prince",
        year: 2022,
        quality: "PreDvd",
        category: ["Tamil"],
        image: "https://images.unsplash.com/photo-1574267432644-f610a5804a31?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/prince"
    },
    {
        title: "Inception",
        year: 2010,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/inception"
    },
    {
        title: "Interstellar",
        year: 2014,
        quality: "HD",
        category: ["English"],
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/interstellar"
    },
    {
        title: "The Dark Knight",
        year: 2008,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/darkknight"
    },
    {
        title: "Avengers Endgame",
        year: 2019,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/endgame"
    },
    {
        title: "Gladiator",
        year: 2000,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1542204625-ca6c2f715f0c?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/gladiator"
    },
    {
        title: "Baahubali 2",
        year: 2017,
        quality: "HD",
        category: ["Action"],
        image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/baahubali2"
    },
    {
        title: "KGF Chapter 2",
        year: 2022,
        quality: "HD",
        category: ["Action"],
        image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/kgf2"
    },
    {
        title: "Pushpa",
        year: 2021,
        quality: "HD",
        category: ["Action"],
        image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/pushpa"
    },
    {
        title: "Shang-Chi",
        year: 2021,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/shangchi"
    },
    {
        title: "Venom 2",
        year: 2021,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1611419010196-a425a5b4e3d4?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/venom2"
    },
    {
        title: "Aquaman",
        year: 2018,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/aquaman"
    },
    {
        title: "Wonder Woman",
        year: 2017,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/wonderwoman"
    },
    {
        title: "Man of Steel",
        year: 2013,
        quality: "HD",
        category: ["English", "Action"],
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/manofsteel"
    },
    {
        title: "Vikram Vedha",
        year: 2022,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/vikramvedha"
    },
    {
        title: "Sarpatta Parambarai",
        year: 2021,
        quality: "HD",
        category: ["Tamil", "Action"],
        image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&h=600&fit=crop",
        telegramLink: "https://t.me/askmovies/sarpatta"
    }
].map((movie, index) => ({ id: index + 1, ...movie }));

// ===================================
// GLOBAL STATE MANAGEMENT
// ===================================
let currentPage = 1;
const moviesPerPage = 20;
let filteredMovies = [...moviesDatabase];
let selectedCategory = 'All';
let searchQuery = '';

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    renderMovies();
    renderPagination();
    updateResultsInfo();
    setupEventListeners();
}

// ===================================
// EVENT LISTENERS SETUP
// ===================================
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    
    // Category filter buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', handleCategoryFilter);
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const categoryFilters = document.getElementById('categoryFilters');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            categoryFilters.classList.toggle('show');
        });
    }
    
    // Search toggle button (mobile)
    const searchToggleBtn = document.querySelector('.search-toggle-btn');
    const filterWrapper = document.querySelector('.filter-wrapper');
    const filterSection = document.querySelector('.filter-section');
    
    if (searchToggleBtn) {
        searchToggleBtn.addEventListener('click', () => {
            filterWrapper.classList.toggle('show');
            if (filterWrapper.classList.contains('show')) {
                setTimeout(() => {
                    filterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    searchInput.focus();
                }, 100);
            }
        });
    }
}

// ===================================
// FILTER ENGINE
// ===================================
function applyFilters() {
    // Reset to first page when filters change
    currentPage = 1;
    
    // Start with all movies
    filteredMovies = moviesDatabase.filter(movie => {
        // Apply category filter
        const categoryMatch = selectedCategory === 'All' || 
                             movie.category.includes(selectedCategory);
        
        // Apply search filter (case-insensitive)
        const searchMatch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
        
        // Both conditions must be true
        return categoryMatch && searchMatch;
    });
    
    // Re-render everything
    renderMovies();
    renderPagination();
    updateResultsInfo();
}

// ===================================
// SEARCH FUNCTIONALITY
// ===================================
function handleSearch(event) {
    searchQuery = event.target.value.trim();
    applyFilters();
}

// ===================================
// CATEGORY FILTER FUNCTIONALITY
// ===================================
function handleCategoryFilter(event) {
    // Remove active class from all buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Update selected category
    selectedCategory = event.target.getAttribute('data-category');
    
    // Apply filters
    applyFilters();
}

// ===================================
// RENDER MOVIES FUNCTION
// ===================================
function renderMovies() {
    const movieGrid = document.getElementById('movieGrid');
    const noResults = document.getElementById('noResults');
    
    // Add fade-out effect
    movieGrid.classList.add('fade-out');
    
    setTimeout(() => {
        // Clear existing content
        movieGrid.innerHTML = '';
        
        // Calculate pagination
        const startIndex = (currentPage - 1) * moviesPerPage;
        const endIndex = startIndex + moviesPerPage;
        const moviesToShow = filteredMovies.slice(startIndex, endIndex);
        
        // Show/hide no results message
        if (filteredMovies.length === 0) {
            movieGrid.style.display = 'none';
            noResults.style.display = 'block';
        } else {
            movieGrid.style.display = 'grid';
            noResults.style.display = 'none';
            
            // Render movie cards
            moviesToShow.forEach(movie => {
                const movieCard = createMovieCard(movie);
                movieGrid.appendChild(movieCard);
            });
        }
        
        // Remove fade-out effect
        movieGrid.classList.remove('fade-out');
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
}

// ===================================
// CREATE MOVIE CARD FUNCTION
// ===================================
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.onclick = () => openTelegramLink(movie.telegramLink);
    
    card.innerHTML = `
        <div class="movie-poster">
            <img src="${movie.image}" alt="${movie.title}" loading="lazy">
            <span class="quality-badge">${movie.quality}</span>
            <div class="watch-overlay">
                <button class="watch-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
        
